import api from "./api";

// Interface baseada no seu Prisma
export interface Consulta {
  id?: number;
  nomepet: string;
  nomedono: string;
  nomedr: string;
  idade: string;
  tipodaconsulta: string;
  data: string;
  horario: string;
  descricao?: string;
}

// Buscar todas as consultas
export async function getConsultas(): Promise<Consulta[]> {
  const response = await api.get("/Consulta");
  // Ajuste conforme seu backend (às vezes vem em response.data.values)
  return response.data.values ?? response.data;
}

// Criar nova consulta
export async function createConsulta(data: Omit<Consulta, "id">): Promise<any> {
  const response = await api.post("/Consulta", data);
  return response.data;
}

// Atualizar consulta por ID
export async function updateConsulta(
  id: number,
  data: Partial<Consulta>
): Promise<any> {
  const response = await api.patch(`/Consulta/${id}`, data);
  return response.data;
}

// Deletar consulta por ID
export async function deleteConsulta(id: number): Promise<any> {
  const response = await api.delete(`/Consulta/${id}`);
  return response.data;
}

// Buscar consulta por Dono e Pet
export async function getConsultaByDonoAndPet(
  nomedono: string,
  nomepet: string
): Promise<Consulta[]> {
  const response = await api.get(`/Consulta/${nomedono}/${nomepet}`);
  return response.data.values ?? response.data;
}

// Buscar consultas por nome do Doutor
export async function getConsultaByNomedr(nomedr: string): Promise<Consulta[]> {
  const response = await api.get(`/Consulta/${nomedr}`);
  return response.data.values ?? response.data;
}
