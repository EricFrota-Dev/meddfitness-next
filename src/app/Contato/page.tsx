// import GradientCard from "@/components/ui/GradientCard";
// import { contacts } from "./constants";

const Contact = () => {
  return (
    <div
      className="px-[10%] grid grid-cols-2 justify-around mt-40 gap-10
    "
    >
      <h2 className="">
        imprensa@meddfitness.com.br <br />
        digital@meddfitness.com.br
        <br />
        hub@meddfitness.com.br <br />
        {/* paulonetto@meddfitness.com.br */}
        <br />
      </h2>
      {/* {contacts.map(({ name, contacts }, i) => (
        <GradientCard key={i} bordered className="text-center">
          <div className="mb-6">
            <h1>{name}</h1>
          </div>
          <div className="flex flex-col ">
            {contacts.map((item, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-primary text-xl transition-all duration-300 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>
        </GradientCard>
      ))} */}
    </div>
  );
};

export default Contact;
