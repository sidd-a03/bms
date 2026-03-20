import { prisma } from "@repo/db";

const Page = async () => {
  const user = await prisma.user.findFirst();
  return (
    <>
      {user?.username}
      <br />
      {user?.password}
    </>
  )
}

export default Page;