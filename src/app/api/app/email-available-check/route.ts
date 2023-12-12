import prisma from "@/utils/prisma";

export const POST = async (req: any) => {
  try {
    const { name, domain: requestDomain } = await req.json();
    console.log(`${name}@${requestDomain}`);
    // Validate name and domain
    if (!name || !requestDomain) {
      return Response.json(
        { message: "Name and domain are required." },
        { status: 400 } // Bad Request
      );
    }

    // Validating name
    const validNameRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+){0,2}$/;

    if (!validNameRegex.test(name)) {
      return Response.json(
        { message: "Invalid name for the beginning of an email." },
        { status: 422 } // Unprocessable Entity
      );
    }

    // Check if email route exists
    const routeExists = await prisma.emailRoutes.findUnique({
      where: {
        fromEmail: `${name}@${requestDomain}`,
      },
    });

    if (routeExists) {
      return Response.json(
        { message: "Email route is already taken" },
        { status: 409 } // Conflict
      );
    } else {
      return Response.json(
        { message: "Email route is available" },
        { status: 200 } // OK
      );
    }
  } catch (error) {
    return Response.json(
      { message: "Internal server error" },
      { status: 500 } // Internal Server Error
    );
  }
};
