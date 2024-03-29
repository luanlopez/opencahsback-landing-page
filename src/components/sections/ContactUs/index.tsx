import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

import { AVERAGE_TICKET_OPTIONS } from '@/constants/average-ticket'

export function ContactUs() {
  return (
    <section
      id="contact-us"
      className="w-full lg:flex lg:items-center lg:h-[46.5rem] relative bg-neutral-900"
    >
      <div
        className="
          w-full h-[22rem] hidden bg-brand-main lg:flex lg:flex-col pl-[29.5rem]
          2xl:pl-[36rem] justify-center
        "
      >
        <div className="flex flex-col gap-3 px-20 xl:px-36 2xl:px-48 min-[1770px]:px-72">
          <h1 className="text-2xl xl:text-[2rem] xl:leading-[3rem] 2xl:text-4xl">
            Quer impulsionar seu negócio e transformar seus resultados?
          </h1>
          <span className="text-neutral-700 font-medium">
            Preencha o formulário e fale com um de nosso especialistas
          </span>
        </div>
      </div>

      <div
        className="
          px-[1.625rem] py-8 sm:px-24 sm:py-11 md:px-40 lg:p-0 lg:left-14
          2xl:left-44 lg:absolute
        "
      >
        <div className="px-6 py-8 sm:px-12 lg:px-14 lg:py-11 bg-neutral-800 rounded">
          <h1 className="text-2xl text-white lg:text-3xl">Fale conosco</h1>

          <form className="flex flex-col gap-y-4 mt-4 lg:mt-[2.625rem]">
            <Input placeholder="Nome" />
            <Input placeholder="Telefone" />
            <Input placeholder="Email" />

            <select
              className="
              w-full h-11 px-4 bg-grey-700 text-neutral-400 rounded appearance-none
              text-sm font-medium border border-transparent outline-none
              focus:border-brand-main/50 transition-colors ease-in delay-75
            "
            >
              <option value="">Ticket médio</option>
              {AVERAGE_TICKET_OPTIONS.map(ticket => (
                <option key={ticket.key} value={ticket.key}>
                  {ticket.value}
                </option>
              ))}
            </select>

            <textarea
              placeholder="O que gostaria de perguntar?"
              className="
              px-4 py-[0.625rem] h-32 bg-grey-700 text-neutral-400 rounded text-sm
              font-medium resize-none border border-transparent outline-none 
              focus:border-brand-main/50 transition-colors ease-in delay-75
            "
            />

            <Button label="Enviar" size="medium" />
          </form>
        </div>
      </div>
    </section>
  )
}
