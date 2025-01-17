import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

/**
 * @title {{{name}}}
 */
export interface Testimonial {
  image: ImageWidget;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  description: string;
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  name: string;
  href: string;
}

/**
 * @title {{{title}}}
 */
export interface SocialMedia {
  icon: AvailableIcons;
  title: string;
  link: string;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want
   */
  title?: string;
  subtitle?: string;
  socialLinks?: SocialMedia[];
  testimonials?: Testimonial[];
  showMoreLabel?: string;
  showLessLabel?: string;
}

export default function Testimonials({
  title = "Loved by builders.",
  subtitle,
  socialLinks,
  testimonials = [
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/88b0bc70-00a1-4330-9f2e-88e3b68d3e12",
      name: "Sibelius Seraphini",
      description: '"deco.cx makes creating high-performance websites easy!"',
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/ed554700-2d66-43e2-b6b2-e1844a2db689",
      name: "Officialstarone",
      description:
        '"Figma, vscode and WordPress abilities all in one interface, this is amazing.. I just wish it could be free for students like me, would have to wait till i get a job to be able to afford this 😣"',
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/5ea5f2ce-0a0e-4105-8333-2cbddc6c1c6e",
      name: "Alex Dulub",
      description:
        `"It's exciting to see a platform that not only speeds up frontend development but also fosters collaboration between developers and marketing teams. The seamless integration of modern technologies and the focus on both developer power and ease of use are impressive."`,
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/0b4a74da-5050-4641-a128-df3b606bfd05",
      name: "Andres Pradilla",
      description:
        `"Wow!!! 🚀 This is a game changer for headless ecommerce! Have seen the product in action and it absolutely rocks! The best news is this product has happy live customers using it day in day out and have seen great value out of the tool!"`,
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/31035191-0815-4a14-b2a5-559c451a19a3",
      name: "Joep van den Bogaert",
      description:
        `"Wow, such an impressive product. Really love how you bring together development and content management. The automatic forms based on the typescript models are awesome."`,
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/adbf4b08-e54f-4d4a-aecf-94de3974f0e0",
      name: "khaosdoctor",
      description:
        `"This is AWESOME! I’ve been looking to find something like this for my pages for ages. The Deno core using TypeScript is the ABSOLUTE BEST mix ever. Loved the work you guys are doing. Hope you continue to disrupt even more!"`,
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/adbf4b08-e54f-4d4a-aecf-94de3974f0e0",
      name: "p2hari",
      description:
        `"oh man, are you folks for real!!! I just checked out the website, git and discord channels (I just joined in) and you are awesome. Open source core and so much more work on git. Bringing partytown to deno etc. etc."`,
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/adbf4b08-e54f-4d4a-aecf-94de3974f0e0",
      name: "nopro",
      description:
        `"This looks amazing, like a modern take on Dreamweaver or something. The low code IDE may soon return! The ability to switch between no-code/code is great for teaching people to code. Dreamweaver (and MySpace profiles) basically taught me CSS."`,
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/5b024b3e-d57c-48bc-8818-de33cf4d447a",
      name: "Marco Ferreira",
      description:
        `"Man, I don't even know who to tag here hahaha, but I wanted to give my recognition to deco itself! To the folks who founded it and those who keep updating and improving the platform. Excellent work for the client in terms of registration flexibility and simple for the developer!"`,
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/726cd991-7b37-45a7-b1d2-e1af364ea926",
      name: "Gustavo Vasconcellos",
      description:
        `"A round of applause for the team that has significantly improved the usability of the Admin since the last hackathon. Both the section editor and the library are GREAT. Special recognition to whoever had the idea and implemented the change to repo branches in the Admin: Great job! 👏"`,
      href: "#",
    },
    {
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/530/3c766de4-48a5-46c9-aff4-6edd766c949c",
      name: "Julyanne Taboaço",
      description:
        `"I’m sure you will soar even higher; this is just the beginning. Very grateful for this partnership and for believing in you from the very start. And what a partnership! You are tireless in evolving and suggesting improvements, embracing any challenges we face, and always ready to support and grow with us!"`,
      href: "#",
    },
  ],
  showMoreLabel = "SHOW MORE",
  showLessLabel = "SHOW LESS",
}: Props) {
  return (
    <div class="relative lg:mx-auto lg:max-w-[1440px] z-10 px-4 py-14 lg:py-40 lg:px-0 flex flex-col gap-20 justify-center items-center">
      <div class="flex flex-col items-center gap-4">
        {title && (
          <h2
            class="font-albert-sans text-3xl lg:text-4xl font-medium text-white text-center"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          >
          </h2>
        )}

        {subtitle && (
          <p class="font-albert-sans text-xl font-medium text-white text-center opacity-70">
            {subtitle}
          </p>
        )}
        {socialLinks && (
          <div class="flex flex-col md:flex-row gap-2 items-center">
            {socialLinks.map(({ icon, title, link }) => (
              <a
                href={link}
                class="flex gap-2 items-center font-bold text-white bg-[#0D1717] hover:bg-[#121e1e] border border-[#162121] rounded-lg px-4 py-3 opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
              >
                <Icon id={icon} size={20} strokeWidth={0} />
                <span>{title}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <div
        class={`overflow-hidden max-h-[800px] [&:has(input:checked)]:max-h-[unset] lg:max-h-[unset]`}
      >
        <input
          id="collapse-testimonials"
          name="collapse-testimonials"
          type="checkbox"
          class="hidden peer"
        />
        <div class="columns-1 md:columns-2 lg:columns-3 gap-4 w-full">
          {testimonials?.map((testimonial) => (
            <a href={testimonial.href} class="group">
              <div class="bg-[#0B1612] hover:bg-[#243939] p-[1px] rounded-2xl flex-1 mb-4 overflow-hidden">
                <div class="bg-[#070D0D] h-full flex flex-col justify-between p-8 gap-4 rounded-2xl">
                  <div
                    class="font-albert-sans text-base text-[#949E9E] leading-6"
                    dangerouslySetInnerHTML={{
                      __html: testimonial.description,
                    }}
                  />
                  <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-row items-center gap-4">
                      <Image
                        width={32}
                        height={32}
                        src={testimonial.image}
                        alt={testimonial.image}
                        decoding="async"
                        loading="lazy"
                      />
                      <div
                        class="font-albert-sans text-base text-white"
                        dangerouslySetInnerHTML={{
                          __html: testimonial.name,
                        }}
                      />
                    </div>
                    <div class="w-4 h-4 overflow-hidden">
                      <Icon
                        id="Redirect"
                        size={16}
                        class="text-white/50 group-hover:translate-x-[1rem] group-hover:translate-y-[-1rem] transistion duration-500"
                      />
                      <Icon
                        id="Redirect"
                        size={16}
                        class="text-[#FFFFFF97] translate-x-[-1rem] group-hover:translate-x-[0rem] group-hover:translate-y-[-1rem] transistion duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div class="w-full p-12 pt-6 hidden peer-checked:flex lg:hidden">
          <label
            for="collapse-testimonials"
            class="cursor-pointer mx-auto py-2 px-3 font-bold font-[argent-pixel] text-[16px] bg-[#02F67C] hover:bg-[#2FD180] text-[#113032] border border-[#113032] transition duration-300"
          >
            {showLessLabel}
          </label>
        </div>
        <div
          class="group w-[var(--w)] pb-12 flex absolute bottom-0 mb-14 peer-checked:hidden lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, #030806 85%)",
            "--w": "calc(100% - 2 * 16px)",
          }}
        >
          <label
            for="collapse-testimonials"
            class="cursor-pointer mx-auto py-2 px-3 font-bold font-[argent-pixel] text-[16px] bg-[#02F67C] hover:bg-[#2FD180] text-[#113032] border border-[#113032] transition duration-300"
          >
            {showMoreLabel}
          </label>
        </div>
      </div>
    </div>
  );
}
