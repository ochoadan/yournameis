import prisma from "./prisma";

export async function getDomainData() {
  const response = await prisma.domains.findMany();

  const domainsData = response.map((item: any) => ({
    id: item.id,
    name: item.domain,
  }));

  return domainsData;
}
