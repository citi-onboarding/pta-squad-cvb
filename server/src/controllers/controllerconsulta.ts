import { Request, Response } from "express";
import { get, request } from "http";
import { send } from "process";
import { Citi, Crud } from "src/global";

class controllerconsulta implements Crud {
  constructor(private readonly citi = new Citi("Consulta")) {}
  create = async (request: Request, response: Response) => {
    const {
      nomepet,
      nomedono,
      nomedr,
      idade,
      tipodaconsulta,
      data,
      horario,
      descricao,
    } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      nomepet,
      nomedono,
      nomedr,
      idade,
      tipodaconsulta,
      data,
      horario
    );

    if (isAnyUndefined) {
      return response.status(400).send();
    }

    const novaconsulta = {
      nomepet,
      nomedono,
      nomedr,
      idade,
      tipodaconsulta,
      data,
      horario,
      descricao,
    };

    const { httpStatus, message } = await this.citi.insertIntoDatabase(
      novaconsulta
    );

    return response.status(httpStatus).send({ message });
  };

  get = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send({ values });
  };

  getByDonoAndPet = async (request: Request, response: Response) => {
    //  'nomedono' e 'nomepet'
    const { nomedono, nomepet } = request.params;

    // se algum ta nulo da erro
    if (!nomedono || !nomepet) {
      return response.status(400).send({ message: "Parâmetros ausentes" });
    }

    //  findByFields da classe Citi, passando os filtros nomedono e nomepet convertidos para string
    const { httpStatus, values } = await this.citi.findByFields({
      nomedono: nomedono,
      nomepet: nomepet,
    });

    // Retorna a resposta HTTP com o status e os valores encontrados
    return response.status(httpStatus).send({ values });
  };

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  update = async (request: Request, response: Response) => {
    const { id } = request.params;
    const {
      nomepet,
      nomedono,
      nomedr,
      idade,
      tipodaconsulta,
      data,
      horario,
      descricao,
    } = request.body;

    const updatedValues = {
      nomepet,
      nomedono,
      nomedr,
      idade,
      tipodaconsulta,
      data,
      horario,
      descricao,
    };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new controllerconsulta();
