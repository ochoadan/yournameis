import prisma from "@/utils/prisma";

export const GET = async () => {
  try {
    const domains = await prisma.domains.findMany();
    return Response.json(domains, { status: 200 });
  } catch (error: any) {
    // Handle the error here
    console.error("An error occurred:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
};
