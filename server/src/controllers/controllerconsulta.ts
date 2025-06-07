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
      tipopet, // <-- Adiciona aqui
    } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      nomepet,
      nomedono,
      nomedr,
      idade,
      tipodaconsulta,
      data,
      horario,
      tipopet // <-- Adiciona na verificação
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
      tipopet, // <-- Adiciona aqui
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

    getById = async (request: Request, response: Response) => {
      const { id } = request.params;

      if (!id) {
        return response.status(400).send({ message: "Parâmetro ID ausente" });
      }

      const { httpStatus, value } = await this.citi.findById(Number(id));

      if (!value) {
        return response.status(404).send({ message: "Consulta não encontrada" });
      }

      return response.status(httpStatus).send({ value });
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
  getByNomedr = async (request: Request, response: Response) => {
    const { nomedr } = request.params;

    if (!nomedr) {
      return response.status(400).send({ message: "Parâmetros ausentes" });
    }

    const { httpStatus, values } = await this.citi.findByNomeDr(nomedr);
    return response.status(httpStatus).json(values);
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
      tipopet, // <-- Adiciona aqui
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
      tipopet, // <-- Adiciona aqui
    };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      Number(id),
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new controllerconsulta();
