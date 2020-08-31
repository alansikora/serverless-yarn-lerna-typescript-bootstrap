import sample from "@alansikora/sample-package";

export async function main(event, context) {
  return {
    statusCode: 200,
    body: `Hello World! Via ${sample()}.`,
  };
}
