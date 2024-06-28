import { useSignal, useSignalEffect } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { Dropdown } from "site/islands/Home/Dropdown.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
export interface Alert {
  label: string;
}

export interface ColumnMenu {
  icon?: AvailableIcons;
  title?: string;
  nested?: MenuLink[];
}

export interface MenuLink {
  label: string;
  href: string;
  targetBlank?: boolean;
  columns?: ColumnMenu[];
  tag?: {
    color: string;
    description: string;
  };
}

export interface Props {
  alerts?: {
    mobile?: Alert[];
    desktop?: Alert[];
  };
  menuLinks: MenuLink[];
  idiom: string;
  demo?: { label: string; url: string };
  login: { label: string; url: string };
  sign: { label: string; url: string };
  linkedinUrl: string;
  gitUrl: string;
  discordUrl: string;
}


function MobileMenuDropdown({ icon, nested, title }: ColumnMenu) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {icon && title && (
        <li>
          <div
            class="pb-[24px] flex items-center gap-2 text-white cursor-pointer hover:text-[#02F67C] transition duration-200 ease-in-out"
            onClick={() => setOpen(!open)}
          >
            <Icon id={icon} size={25} />
            <p class="font-bold text-[16px]">
              {title}
            </p>
            <Icon
              id={"ChevronDown"}
              width={15}
              height={15}
              strokeWidth={"3"}
              class={`${open ? "rotate-180" : ""}`}
            />
          </div>
          <div
            class={`${open ? "flex" : "hidden"} pl-[10px] flex-col pb-[30px]`}
          >
            {nested?.map((item) => (
              <li class={"grid items-center py-2"}>
                <a
                  href={item.href}
                  target={item?.targetBlank ? "_blank" : "_self"}
                  class="block px-[24px]  font-normal text-[16px] leading-[19.36px] text-white hover:text-[#02F67C] transition duration-200 ease-in-out"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </div>
        </li>
      )}
    </>
  );
}

function MobileMenuLink({ href, label, targetBlank, columns }: MenuLink) {
  const hasNested = columns && columns.length > 0;
  if (hasNested) {
    return (
      <li class="py-4 grid items-center">
        <ul class="">
          {columns.map((col) => {
            if (col?.icon && col?.title) {
              return <MobileMenuDropdown {...col} />;
            } else {
              return col?.nested?.map((item) => (
                <li class={"grid items-center py-2"}>
                  <a
                    href={item.href}
                    target={item?.targetBlank ? "_blank" : "_self"}
                    class="block pr-[24px]  font-normal text-[16px] leading-[19.36px] text-white hover:text-[#02F67C] transition duration-200 ease-in-out"
                  >
                    {item.label}
                  </a>
                </li>
              ));
            }
          })}
        </ul>
      </li>
    );
  }

  return (
    <li class={"grid items-center py-3 md:py-4"}>
      <a
        href={href}
        target={targetBlank ? "_blank" : "_self"}
        class="block pr-[24px]  font-normal text-[16px] leading-[19.36px] text-white"
      >
        {label}
      </a>
    </li>
  );
}

function MenuLink({ href, label, targetBlank, columns, ...props }: MenuLink) {
  const open = useSignal(false);

  const setOpen = () => (open.value = !open.value);

  if (columns && columns.length > 0) {
    return (
      <li
        class="relative h-full grid text-white hover:text-[#02F67C] transition duration-200 ease-in-out"
        {...props}
      >
        <Dropdown
          columns={columns}
          value={label}
          onClick={setOpen}
          open={open.value}
        />
      </li>
    );
  }

  return (
    <li
      class="relative h-full grid text-white hover:text-[#02F67C] transition duration-200 ease-in-out"
      {...props}
    >
      <a
        target={targetBlank ? "_blank" : "_self"}
        href={href}
        class="flex items-center h-full self-center font-normal text-[16px] bg-clip-text bg-linear-white-green bg-position-100 justify-center"
        style="background-size: 200%;"
      >
        {label}
      </a>
    </li>
  );
}

export default function Header({ menuLinks, ...props }: Props) {
  const [open, setOpen] = useState(false);
  const stars = useSignal("-");
  const members = useSignal("-");

  const retrieveGithubStars = async () => {
    const response = await fetch("https://api.github.com/orgs/deco-cx/repos");
    const repos = await response.json();
    const total_stars = repos.reduce(
      (acc: number, repo: { stargazers_count: number }) =>
        acc + repo.stargazers_count,
      0
    );
    console.log(total_stars);
    stars.value = total_stars;
  };

  const retrieveDiscordMemberCount = async () => {
    const response = await fetch(
      "https://discord.com/api/v9/invites/hBUs29me8Z?with_counts=true&with_expiration=true"
    );
    const discordData = await response.json();
    console.log(discordData.approximate_member_count);
    members.value = discordData.approximate_member_count;
  };

  useEffect(() => {
    retrieveGithubStars();
    retrieveDiscordMemberCount();
  }, []);

  return (
    <section class="lg:container fixed top-6 z-50 w-full lg:w-full left-1/2 transform -translate-x-1/2">
      <nav class="flex flex-row items-center max-w-screen-2xl m-auto relative justify-between px-4 md:px-8                                                                                                                                    z-50">
        <ul class="h-full flex items-center z-[51]">
          <li class="h-full">
            <a
              class="flex items-center h-full pb-[6px] w-24 md:w-36 lg:w-auto mt-[2px]"
              href="/"
            >
              <svg
                width="144"
                height="40"
                viewBox="0 0 144 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M142.437 18.0741L136.511 25.3333C137.696 27.5556 139.03 29.6296 140.363 31.5556C141.252 32.7407 141.548 34.3704 141.104 35.8518V36C140.511 38.0741 138.733 39.7037 136.511 39.8518C135.178 40 133.844 40 132.511 40C131.178 40 129.844 40 128.511 39.8518C127.178 39.7037 126.141 39.1111 125.252 38.2222C124.363 39.1111 123.326 39.7037 121.993 39.8518C120.807 40 119.326 40 117.993 40C116.511 40 115.178 40 113.993 39.8518C113.252 39.7037 112.659 39.5556 112.067 39.2593C110.437 39.7037 108.659 39.8518 106.881 39.8518C103.03 39.8518 100.363 38.8148 98.2889 37.4815C96.5111 38.963 94.2889 39.8518 91.7704 39.8518C88.6593 39.8518 86.7333 38.5185 85.5482 37.4815C82.8815 38.963 79.6222 39.8518 76.363 39.8518C73.1037 39.8518 70.1407 38.963 67.9185 37.4815C67.4741 37.7778 67.0296 38.0741 66.5852 38.2222C64.363 39.2593 61.4 39.8518 58.5852 39.8518C53.9926 39.8518 51.0296 38.3704 49.1037 36.7407C48.8074 37.037 48.363 37.3333 47.9185 37.6296C43.9185 39.7037 39.6222 39.8518 37.8444 39.8518C31.3259 39.8518 28.0667 37.037 26.2889 34.6667C26.1407 34.5185 25.9926 34.3704 25.9926 34.0741C23.0296 37.6296 19.1778 39.8518 13.5481 39.8518C8.51111 39.8518 4.51111 37.9259 2.14074 34.6667C-0.377778 30.963 -0.674074 25.9259 1.25185 20.5926C3.91852 13.6296 10.2889 9.18519 17.9926 9.18519C17.9926 9.18519 18.1407 9.18519 18.2889 9.18519C18.2889 9.03704 18.2889 8.74074 18.2889 8.59259C18.1407 6.22222 19.7704 4 22.1407 3.11111L29.1037 0.444444C29.8444 0.148148 30.5852 0 31.3259 0C33.5481 0 35.6222 1.18518 36.6593 3.25926L39.6222 9.33333C40.5111 9.18518 41.4 9.18519 42.2889 9.18519C46.437 9.18519 49.9926 10.6667 52.2148 13.3333C55.6222 10.6667 59.9185 9.18519 64.6593 9.18519C67.1778 9.18519 69.4 9.62963 71.3259 10.5185C71.6222 10.6667 72.0667 10.963 72.363 11.2593C75.0296 9.92593 77.9926 9.18519 81.1037 9.18519C85.9926 9.18519 90.1407 11.1111 92.5111 14.5185C93.6963 16.2963 94.437 18.2222 94.7333 20.4444C97.6963 13.6296 104.659 9.18519 112.659 9.18519C114.437 9.18519 116.363 9.48148 117.844 9.92593C118.141 9.77778 118.437 9.77778 118.881 9.77778C120.067 9.48148 121.252 9.48148 122.437 9.48148C123.622 9.48148 124.956 9.48148 126.141 9.62963C127.178 9.77778 128.067 10.0741 128.807 10.6667C129.548 10.0741 130.437 9.62963 131.474 9.62963C132.659 9.48148 133.993 9.48148 135.326 9.48148C136.659 9.48148 137.844 9.48148 139.03 9.77778C140.956 10.0741 142.437 11.2593 143.178 13.037C143.919 14.6667 143.622 16.5926 142.437 18.0741Z"
                  fill="#02F67C"
                />
                <path
                  d="M130.289 24.5925C132.067 28.2962 134.141 31.5555 136.067 34.3703V34.5184C133.696 34.6666 131.326 34.6666 129.104 34.5184C128.067 33.0369 127.03 30.8147 126.141 28.5925L121.548 34.5184C119.326 34.6666 116.659 34.6666 114.585 34.5184L123.178 24.148C121.696 21.4814 120.215 18.6666 119.326 14.6666C121.4 14.5184 123.474 14.5184 125.548 14.6666C126.141 16.5925 126.733 18.6666 127.474 20.5925L132.067 14.6666C134.141 14.3703 136.511 14.3703 138.437 14.6666L130.289 24.5925ZM33.9925 12.148C34.5851 12.2962 35.0296 11.9999 34.7333 11.4073L31.9185 5.62953C31.7703 5.18508 31.1777 5.18508 30.8814 5.33323L23.7703 7.9999C23.1777 8.14805 23.1777 8.74064 23.7703 8.88879L25.9925 9.48138C24.2148 13.3332 22.1407 19.2592 20.3629 22.9629C18.437 27.111 17.3999 29.9258 14.1407 29.9258C10.8814 29.9258 10.2888 27.4073 11.7703 23.7036C13.3999 19.4073 16.0666 18.2221 19.1777 19.111C20.0666 17.9258 20.6592 16.148 20.9555 14.5184C20.0666 14.2221 19.0296 14.2221 18.1407 14.2221C13.1037 14.2221 8.21476 16.7406 6.28884 22.2221C3.47402 29.1851 5.84439 34.6666 13.5481 34.6666C19.1777 34.6666 22.2888 32.148 25.9925 24.2962C28.0666 19.9999 29.6962 15.7036 31.7703 11.5555L33.9925 12.148ZM48.8074 21.7777C47.474 25.3332 43.1777 26.8147 35.0296 26.6666C35.0296 29.0369 36.6592 30.074 39.6222 30.074C41.6962 30.074 43.9185 29.6295 45.3999 28.7406C45.8444 30.2221 45.8444 31.5555 45.5481 32.8888C43.0296 34.2221 40.0666 34.5184 37.8444 34.5184C29.4 34.5184 28.2148 28.148 29.9925 23.2592C31.6222 18.5184 36.0666 14.2221 42.1407 14.2221C47.9185 14.3703 50.2888 18.074 48.8074 21.7777ZM41.2518 18.5184C38.8814 18.5184 37.1037 19.9999 36.0666 22.5184C41.1037 22.5184 42.8814 21.7777 43.3259 20.5925C43.6222 19.7036 43.3259 18.5184 41.2518 18.5184ZM64.3629 19.111C65.3999 19.111 66.437 19.2592 67.0296 19.7036C68.0666 18.2221 68.8074 16.7406 68.8074 15.2592C67.9185 14.8147 66.2888 14.5184 64.3629 14.5184C57.8444 14.5184 52.6592 18.3703 50.7333 23.7036C48.9555 28.7406 50.2888 34.9629 58.5851 34.9629C60.8074 34.9629 63.0296 34.5184 64.5111 33.7777C64.9555 32.2962 65.1036 30.8147 64.6592 29.3332C63.6222 29.7777 62.1407 30.2221 60.5111 30.2221C56.3629 30.2221 55.9185 27.111 56.8074 24.4443C57.8444 21.3332 60.3629 19.111 64.3629 19.111ZM93.2518 27.8518C90.7333 27.8518 89.3999 29.4814 88.8074 30.9629C88.2148 32.7406 88.9555 34.8147 91.7703 34.8147C94.1407 34.8147 95.6222 33.3332 96.2148 31.8518C96.8074 29.9258 96.2148 27.8518 93.2518 27.8518ZM88.9555 26.074C86.8814 31.5555 81.9925 34.6666 76.3629 34.6666C68.8074 34.6666 66.5851 28.7406 68.5111 23.111C70.2888 18.074 74.8814 14.3703 80.9555 14.3703C88.6592 14.3703 91.0296 20.148 88.9555 26.074ZM80.2148 18.9629C77.3999 18.9629 75.474 21.4814 74.7333 23.9999C73.6962 27.111 74.2888 30.2221 77.3999 30.2221C80.0666 30.2221 81.9925 27.8518 82.8814 25.3332C83.7703 22.2221 83.474 18.9629 80.2148 18.9629ZM108.807 29.9258C104.659 29.9258 104.215 26.8147 105.104 24.148C106.141 21.3332 108.659 19.111 112.659 19.111C113.696 19.111 114.733 19.2592 115.326 19.7036C116.363 18.2221 117.104 16.7406 117.104 15.2592C116.215 14.8147 114.585 14.5184 112.659 14.5184C106.141 14.5184 100.955 18.3703 99.0296 23.7036C97.2518 28.7406 98.5851 34.9629 106.881 34.9629C109.104 34.9629 111.326 34.5184 112.807 33.7777C113.252 32.2962 113.4 30.8147 112.956 29.3332C111.918 29.4814 110.437 29.9258 108.807 29.9258Z"
                  fill="#113032"
                />
              </svg>
            </a>
          </li>
        </ul>
        <ul class="hidden lg:flex lg:flex-row h-full px-8 py-2 rounded-xl bg-white/5  border border-[#FFFFFF33] backdrop-blur-3xl gap-14 justify-between">
          <div class="flex gap-10">
            {menuLinks.map((link, index) => {
              return <MenuLink key={index} {...link} />;
            })}
          </div>
          <div class="flex gap-6 align-end">
            <li class="relative h-full grid hover:text-[#02F67C] text-transparent">
              <a
                target={"_blank"}
                href={props.discordUrl}
                class="flex items-center gap-2 opacity-60 hover:opacity-100 text-white text-[13px] transition ease-in duration-200 justify-center"
                style="background-size: 200%;"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                >
                  <g clip-path="url(#clip0_1453_8578)">
                    <path
                      d="M4.57219 5.62691V5.62305C4.12366 5.62305 3.76172 5.99383 3.76172 6.44955C3.76172 6.90527 4.12366 7.27607 4.57219 7.27607C5.02071 7.27607 5.38268 6.90529 5.38268 6.45341C5.38268 5.99765 5.01677 5.62691 4.57219 5.62691Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6 0.140625C2.76396 0.140625 0.140625 2.76396 0.140625 6C0.140625 9.23604 2.76396 11.8594 6 11.8594C9.23604 11.8594 11.8594 9.23604 11.8594 6C11.8594 2.76396 9.23604 0.140625 6 0.140625ZM8.16783 9.09166C8.16783 9.09166 7.87266 8.76328 7.66029 8.47371C8.68322 8.18405 9.06888 7.60474 9.06888 7.60474C8.00531 8.26233 7.01201 8.51534 6 8.48245C4.98799 8.51527 3.99469 8.26233 2.93123 7.60474C2.93123 7.60474 3.31678 8.18405 4.33983 8.47371C4.12739 8.76338 3.83231 9.09166 3.83231 9.09166C2.07748 9.05304 1.39687 7.97937 1.3575 8.0257C1.3575 5.63508 2.51813 3.6885 2.51813 3.6885C3.55678 2.94319 4.52463 2.9122 4.70953 2.90834L4.82759 3.02034C3.5017 3.3911 2.86041 3.97043 2.86041 3.97043C3.99837 3.4208 5.07091 3.22746 6 3.21588C6.92911 3.2276 8.00156 3.4208 9.13959 3.97043C9.13959 3.97043 8.4983 3.3911 7.17244 3.02034L7.29047 2.90834C7.47539 2.9122 8.44322 2.94309 9.48187 3.6885C9.48187 3.6885 10.6425 5.63503 10.6425 8.0257C10.6031 7.97937 9.92252 9.05304 8.16783 9.09166Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.42768 5.62305V5.62691C6.98309 5.62691 6.61719 5.9977 6.61719 6.45341C6.61719 6.90529 6.97918 7.27607 7.42768 7.27607C7.87618 7.27607 8.23815 6.90529 8.23815 6.44955C8.23815 5.9938 7.8762 5.62305 7.42768 5.62305Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1453_8578">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span class="h-4">{stars.value}</span>
              </a>
            </li>
            <li class="group relative grid hover:text-[#02F67C] text-transparent">
              <a
                target={"_blank"}
                href={props.gitUrl}
                class="flex items-center gap-2 opacity-60 hover:opacity-100 text-white text-[13px] transition ease-in duration-200 justify-center"
                style="background-size: 200%;"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                >
                  <path
                    d="M6 0.25C2.685 0.25 0 2.89 0 6.146C0 8.7515 1.719 10.961 4.1025 11.74C4.4025 11.7955 4.5125 11.613 4.5125 11.4565C4.5125 11.3165 4.5075 10.9455 4.505 10.454C2.836 10.8095 2.484 9.663 2.484 9.663C2.211 8.9825 1.8165 8.8005 1.8165 8.8005C1.273 8.435 1.8585 8.4425 1.8585 8.4425C2.461 8.4835 2.7775 9.05 2.7775 9.05C3.3125 9.9515 4.182 9.691 4.525 9.5405C4.579 9.159 4.7335 8.8995 4.905 8.752C3.5725 8.6045 2.172 8.0975 2.172 5.8385C2.172 5.195 2.4045 4.669 2.7895 4.2565C2.722 4.1075 2.5195 3.508 2.842 2.696C2.842 2.696 3.3445 2.538 4.492 3.3005C4.972 3.1695 5.482 3.1045 5.992 3.1015C6.502 3.1045 7.012 3.1695 7.492 3.3005C8.632 2.538 9.1345 2.696 9.1345 2.696C9.457 3.508 9.2545 4.1075 9.1945 4.2565C9.577 4.669 9.8095 5.195 9.8095 5.8385C9.8095 8.1035 8.407 8.602 7.072 8.747C7.282 8.924 7.477 9.2855 7.477 9.838C7.477 10.627 7.4695 11.261 7.4695 11.4525C7.4695 11.607 7.5745 11.7915 7.882 11.7325C10.2825 10.9585 12 8.7475 12 6.146C12 2.89 9.3135 0.25 6 0.25Z"
                    fill="currentColor"
                  />
                </svg>

                <span class="h-4">{members.value}</span>
              </a>
            </li>
          </div>
        </ul>
        <ul class=" ml-auto flex flex-row items-center lg:hidden gap-4 z-[51]">
          <li>
            <a
              href={props.sign.url}
              class="flex items-center text-[#b6b6b6] md:hover:text-[#fff] font-medium text-[16px] px-4 py-2 transition ease-in-out duration-300"
            >
              {props.sign.label}
            </a>
          </li>
          <li>
            <a
              href={props.demo?.url}
              class="flex items-center hover:shadow-[0_0_40px_0_rgba(2,246,124,0.3)] md:w-auto transition-all duration-300 ease-out border-[#02F67C] border-2 text-base text-[#0A2121] bg-[#02F67C] md:hover:bg-[#2FD180] font-medium text-[16px] max-h-[37px] px-4 py-2 rounded-lg md:transition md:ease-in-out md:duration-300"
            >
              {props.demo?.label}
            </a>
          </li>
        </ul>
        <div class="ml-3 lg:hidden z-[51]">
          <div class="grid items-center">
            <button class="focus:outline-none" onClick={() => setOpen(!open)}>
              <svg
                width="35"
                height="32"
                viewBox="0 0 39 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class={open ? "hidden" : ""}
              >
                <rect x="3" y="2" width="33" height="4" rx="2" fill="#ffffff" />
                <rect
                  x="3"
                  y="14"
                  width="33"
                  height="4"
                  rx="2"
                  fill="#ffffff"
                />
                <rect
                  x="3"
                  y="26"
                  width="33"
                  height="4"
                  rx="2"
                  fill="#ffffff"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#ffffff"
                width="35"
                height="32"
                class={open ? "" : "hidden"}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class={
            open
              ? "flex flex-col w-full h-screen overflow-auto gap-[40px] fixed bg-[#03080680] backdrop-blur-3xl left-0 top-0 pb-[80px] z-50 px-8 lg:hidden pt-24"
              : "hidden"
          }
        >
          <ul class="flex flex-col">
            {open &&
              menuLinks &&
              menuLinks.length > 0 &&
              menuLinks.map((link, index) => {
                return (
                  <div>
                    <MobileMenuLink key={link.label} {...link} />
                    {menuLinks.length - 1 > index && <hr />}
                  </div>
                );
              })}
          </ul>
          <ul class="flex flex-row justify-between items-center mt-auto">
            <ul class="flex flex-row justify-center gap-8 w-full items-center">
              <li class="relative h-full grid hover:text-[#02F67C] text-transparent">
                <a
                  target={"_blank"}
                  href={props.discordUrl}
                  class="flex items-center gap-2 opacity-80 text-white hover:text-[#02F67C] text-[16px] transition ease-in duration-200 justify-center"
                  style="background-size: 200%;"
                >
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.89088 0.00596839C7.33738 -0.0431316 7.76183 0.211519 7.92866 0.628586L8.80028 2.80764C9.2026 2.76943 9.60036 2.74998 10.0002 2.74998C10.4 2.74998 10.7978 2.76943 11.2001 2.80764L12.0717 0.628586C12.2381 0.212642 12.6608 -0.0418983 13.1063 0.00561726C14.675 0.172951 16.4134 0.524172 18.0718 1.67945C18.2436 1.79913 18.3735 1.96973 18.4432 2.16717C19.4648 5.06199 20.0268 7.59672 20.2447 9.64417C20.4584 11.6525 20.354 13.3085 19.9286 14.3715C19.9183 14.3973 19.9069 14.4226 19.8945 14.4475C19.5228 15.1902 18.9608 16.0398 18.2572 16.7192C17.5684 17.3843 16.6228 18 15.5002 18C15.1458 18 14.8675 17.841 14.7332 17.7554C14.5688 17.6506 14.4162 17.5203 14.2831 17.3922C14.0142 17.1332 13.7388 16.7989 13.4935 16.4484C13.2469 16.0962 13.0103 15.6985 12.8313 15.3028C12.7927 15.2175 12.7545 15.1273 12.7184 15.0334C10.8875 15.3214 9.12659 15.3222 7.29599 15.0356C7.26721 15.1165 7.23689 15.1949 7.20609 15.27C7.04498 15.6629 6.83097 16.0596 6.60587 16.4126C6.38241 16.7631 6.12927 17.0999 5.8783 17.3626C5.75436 17.4924 5.60908 17.6272 5.44895 17.7369C5.31989 17.8254 5.03773 18 4.66818 18C3.56279 18 2.64592 17.3653 1.99189 16.702C1.31998 16.0206 0.785152 15.1706 0.432385 14.43C0.420828 14.4058 0.410253 14.3811 0.400686 14.3559C-0.000959605 13.3015 -0.101003 11.6546 0.10215 9.64919C0.309139 7.6059 0.84332 5.07432 1.81526 2.18149C1.88109 1.98554 2.00604 1.8148 2.1729 1.69278C3.75886 0.533021 5.34854 0.175572 6.89088 0.00596839ZM5.30889 14.6204C5.11571 14.5704 4.92128 14.5174 4.72547 14.4615C4.19444 14.3098 3.88695 13.7563 4.03867 13.2253C4.19039 12.6942 4.74388 12.3867 5.27492 12.5385C8.59536 13.4872 11.405 13.4872 14.7255 12.5385C15.2565 12.3867 15.81 12.6942 15.9617 13.2253C16.1134 13.7563 15.806 14.3098 15.2749 14.4615C15.088 14.5149 14.9024 14.5656 14.7179 14.6136C14.8296 14.837 14.9735 15.0751 15.1319 15.3015C15.3241 15.576 15.5175 15.8043 15.6704 15.9515C15.6813 15.962 15.6916 15.9717 15.7012 15.9806C16.0396 15.9174 16.4371 15.6966 16.8679 15.2805C17.3613 14.8041 17.7909 14.1718 18.0858 13.5922C18.319 12.9748 18.455 11.7265 18.2559 9.85579C18.0646 8.05776 17.5747 5.78526 16.6668 3.14715C15.7091 2.54525 14.6993 2.25478 13.6409 2.0907L13.2217 3.13869C13.7164 3.24941 14.2308 3.383 14.7749 3.53845C15.306 3.69018 15.6134 4.24366 15.4617 4.7747C15.31 5.30573 14.7565 5.61322 14.2255 5.4615C12.5227 4.97499 11.2468 4.74998 10.0002 4.74998C8.75358 4.74998 7.4777 4.97499 5.77492 5.4615C5.24388 5.61322 4.69039 5.30573 4.53867 4.7747C4.38695 4.24366 4.69444 3.69018 5.22547 3.53845C5.76955 3.383 6.28401 3.24941 6.77864 3.13869L6.36144 2.0957C5.3887 2.25794 4.49278 2.54328 3.60772 3.13C2.74205 5.7714 2.27459 8.04804 2.09197 9.85076C1.90202 11.7258 2.03124 12.9832 2.25657 13.6086C2.53837 14.1905 2.94779 14.8229 3.41598 15.2977C3.80445 15.6917 4.15353 15.8991 4.44205 15.9707C4.57768 15.8267 4.74862 15.6054 4.91949 15.3374C5.06924 15.1025 5.20505 14.8536 5.30889 14.6204ZM15.8082 16.0688C15.8071 16.0681 15.8057 16.0672 15.8041 16.0661C15.8193 16.0742 15.8212 16.0771 15.8082 16.0688ZM5.00019 8.99998C5.00019 7.89541 5.89562 6.99998 7.00019 6.99998C8.10476 6.99998 9.00019 7.89541 9.00019 8.99998C9.00019 10.1045 8.10476 11 7.00019 11C5.89562 11 5.00019 10.1045 5.00019 8.99998ZM11.0002 8.99998C11.0002 7.89541 11.8956 6.99998 13.0002 6.99998C14.1048 6.99998 15.0002 7.89541 15.0002 8.99998C15.0002 10.1045 14.1048 11 13.0002 11C11.8956 11 11.0002 10.1045 11.0002 8.99998Z"
                      fill="CurrentColor"
                    />
                  </svg>
                  <span class="h-6 font-bold">{stars.value}</span>
                </a>
              </li>
              <li class="group relative grid hover:text-[#02F67C] text-transparent">
                <a
                  target={"_blank"}
                  href={props.gitUrl}
                  class="flex items-center gap-2 opacity-80 text-white hover:text-[#02F67C] text-[16px] transition ease-in duration-200 justify-center"
                  style="background-size: 200%;"
                >
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.08129 1.32705C9.0029 0.894839 10.9966 0.89484 12.9183 1.32705C14.0203 0.639647 14.8877 0.314001 15.5373 0.172775C15.8984 0.0942913 16.1896 0.0733675 16.4126 0.0783227C16.5238 0.0807943 16.617 0.0896829 16.6924 0.100685C16.73 0.10618 16.763 0.112182 16.7915 0.11813C16.8057 0.121103 16.8187 0.124059 16.8306 0.126927L16.8476 0.131152L16.8555 0.133197L16.8592 0.134199L16.8611 0.134695C16.862 0.134941 16.8629 0.135187 16.5998 1.09995L16.8629 0.135187C17.1513 0.213848 17.3894 0.417425 17.5119 0.690121C17.99 1.75426 18.0941 2.94238 17.8181 4.06386C18.5792 5.04115 18.9985 6.24875 18.9998 7.49893V7.49995C18.9998 10.0067 18.2548 11.7424 16.9544 12.8684C16.0795 13.6259 15.0274 14.0402 13.9744 14.2752C14.013 14.5735 14.0076 14.9167 14.0028 15.2231C14.0012 15.3199 13.9998 15.4131 13.9998 15.5V19C13.9998 19.5522 13.5521 20 12.9998 20C12.4475 20 11.9998 19.5522 11.9998 19V15.5C11.9998 15.3671 12.0014 15.2451 12.003 15.137L12.0033 15.116C12.0048 15.0146 12.006 14.9293 12.006 14.85C12.006 14.6772 11.9995 14.5811 11.9884 14.5143C11.9793 14.4601 11.9681 14.4312 11.9531 14.4038C11.9351 14.3708 11.8941 14.3085 11.7927 14.2071C11.5204 13.9347 11.4286 13.5302 11.5568 13.1671C11.685 12.8039 12.0103 12.5467 12.3932 12.5056C13.7267 12.3628 14.8528 12.0426 15.6452 11.3565C16.3946 10.7076 16.9996 9.59361 16.9998 7.50097C16.9988 6.56572 16.6339 5.66756 15.9824 4.99662C15.7126 4.71884 15.6275 4.31029 15.7638 3.94788C15.9823 3.36693 16.0256 2.73981 15.8959 2.14233C15.4571 2.24792 14.7176 2.52324 13.6545 3.232C13.4172 3.39018 13.1237 3.43954 12.8477 3.36767C10.9802 2.8813 9.0193 2.8813 7.15181 3.36767C6.87585 3.43954 6.58234 3.39018 6.34507 3.232C5.28193 2.52324 4.54248 2.24792 4.10369 2.14233C3.97399 2.73981 4.01722 3.36693 4.23574 3.94788C4.37207 4.31029 4.28692 4.71884 4.01716 4.99662C3.36571 5.66745 3.00084 6.56543 2.99977 7.50052C2.99988 9.59345 3.60488 10.7075 4.35435 11.3565C5.14678 12.0426 6.27283 12.3628 7.60631 12.5056C7.98923 12.5467 8.31456 12.8039 8.44275 13.1671C8.57094 13.5302 8.4792 13.9347 8.20688 14.2071C8.0402 14.3737 7.99192 14.4961 7.96928 14.6138C7.93886 14.772 7.94333 14.9862 7.99205 15.3759C7.99719 15.4171 7.99977 15.4585 7.99977 15.5V16.977C8.00013 16.9925 8.00013 17.0079 7.99977 17.0233V19C7.99977 19.5522 7.55206 20 6.99977 20C6.44749 20 5.99977 19.5522 5.99977 19V18.2565C5.34544 18.3417 4.7551 18.3054 4.21791 18.1552C3.33724 17.9088 2.72422 17.3908 2.27017 16.8686C1.99028 16.5468 1.70748 16.1356 1.48789 15.8164C1.39387 15.6798 1.31143 15.5599 1.24579 15.4712C0.956042 15.0794 0.804789 14.985 0.717606 14.9593C0.187764 14.8035 -0.115429 14.2476 0.0404073 13.7178C0.196243 13.1879 0.752096 12.8847 1.28194 13.0406C2.04476 13.2649 2.531 13.8455 2.85376 14.2819C3.00791 14.4903 3.12957 14.6691 3.24159 14.8338C3.41557 15.0896 3.56631 15.3112 3.77938 15.5563C4.07532 15.8966 4.37481 16.1223 4.75664 16.2291C5.04069 16.3086 5.43671 16.3405 5.99977 16.2312V15.5611C5.9531 15.174 5.91721 14.7249 5.99909 14.2693C4.95474 14.0334 3.91278 13.6196 3.04519 12.8684C1.74473 11.7424 0.999773 10.0067 0.999773 7.49995V7.49893C1.00105 6.24874 1.42037 5.04115 2.18149 4.06386C1.90547 2.94238 2.0095 1.75426 2.48761 0.690121C2.61013 0.417425 2.84823 0.213848 3.13666 0.135187L3.39977 1.09995C3.13666 0.135187 3.13756 0.134941 3.13847 0.134695L3.1403 0.134199L3.14406 0.133197L3.15191 0.131152L3.1689 0.126927C3.18081 0.124059 3.19387 0.121103 3.2081 0.11813C3.23655 0.112182 3.26957 0.10618 3.30719 0.100685C3.38252 0.0896829 3.47571 0.0807943 3.58693 0.0783227C3.80992 0.0733675 4.10118 0.0942913 4.4622 0.172775C5.11184 0.314001 5.97923 0.639647 7.08129 1.32705Z"
                      fill="currentColor"
                    />
                  </svg>

                  <span class="h-6 font-bold">{members.value}</span>
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <ul class="hidden lg:flex lg:flex-row gap-4 items-center">
          {/* <li>
            <a
              href={props.login.url}
              class="flex gap-2 items-center text-[#02F67C] bg-[#113032] md:hover:text-[#fff] border-[#113032] border hover:bg-transparent font-medium text-[16px] max-h-[37px] px-4 py-2 rounded-full md:transition md:ease-in-out md:duration-300"
            >
              {props.login.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M10.7372 5.59956L8.4544 7.56831L9.1519 10.5116C9.17034 10.5872 9.16594 10.6666 9.13927 10.7398C9.11259 10.8129 9.06483 10.8765 9.00202 10.9225C8.93921 10.9685 8.86417 10.9949 8.78639 10.9982C8.70861 11.0016 8.63158 10.9818 8.56503 10.9414L6.00003 9.36362L3.43503 10.941C3.36847 10.9814 3.29144 11.0011 3.21366 10.9978C3.13588 10.9944 3.06084 10.968 2.99803 10.922C2.93523 10.876 2.88746 10.8124 2.86079 10.7393C2.83411 10.6662 2.82971 10.5868 2.84815 10.5111L3.54565 7.56784L1.26284 5.59909C1.20463 5.54798 1.16267 5.48095 1.14213 5.40627C1.12159 5.33158 1.12337 5.25252 1.14725 5.17884C1.17113 5.10515 1.21606 5.04008 1.2765 4.99164C1.33695 4.9432 1.41025 4.91353 1.48737 4.90628L4.48315 4.66253L5.63721 1.86878C5.66663 1.7967 5.71686 1.73502 5.78147 1.6916C5.84609 1.64819 5.92218 1.625 6.00003 1.625C6.07787 1.625 6.15396 1.64819 6.21858 1.6916C6.2832 1.73502 6.33342 1.7967 6.36284 1.86878L7.5169 4.66253L10.5127 4.90628C10.5899 4.91344 10.6633 4.94309 10.7239 4.99156C10.7844 5.04002 10.8294 5.10518 10.8533 5.17896C10.8772 5.25274 10.8789 5.3319 10.8583 5.40666C10.8377 5.48142 10.7956 5.54848 10.7372 5.59956Z"
                  fill="#02F67C"
                />
                <path
                  d="M11.2115 5.05906C11.1646 4.91493 11.0761 4.7879 10.9571 4.69397C10.8382 4.60005 10.6941 4.54343 10.543 4.53125L7.77741 4.30812L6.7096 1.72578C6.65185 1.58507 6.55356 1.46471 6.42724 1.38C6.30091 1.29529 6.15224 1.25006 6.00014 1.25006C5.84804 1.25006 5.69938 1.29529 5.57305 1.38C5.44672 1.46471 5.34844 1.58507 5.29069 1.72578L4.22382 4.30765L1.45678 4.53125C1.30546 4.54404 1.16128 4.60121 1.0423 4.69559C0.923328 4.78997 0.834849 4.91736 0.787953 5.0618C0.741058 5.20624 0.73783 5.36131 0.778675 5.50758C0.819519 5.65385 0.90262 5.78481 1.01757 5.88406L3.12694 7.70422L2.48428 10.4258C2.44834 10.5736 2.45714 10.7288 2.50957 10.8717C2.56199 11.0145 2.65568 11.1386 2.77873 11.2281C2.90179 11.3176 3.04866 11.3685 3.20071 11.3744C3.35276 11.3803 3.50313 11.3408 3.63272 11.2611L5.99991 9.80422L8.3685 11.2611C8.49815 11.3399 8.6482 11.3786 8.79978 11.3722C8.95136 11.3659 9.09768 11.3149 9.22031 11.2256C9.34295 11.1363 9.43642 11.0127 9.48895 10.8704C9.54149 10.728 9.55074 10.5733 9.51553 10.4258L8.87053 7.70375L10.9799 5.88359C11.0958 5.78451 11.1796 5.65326 11.2209 5.50648C11.2621 5.3597 11.2588 5.20398 11.2115 5.05906ZM10.4924 5.31546L8.2096 7.28421C8.15754 7.32909 8.11881 7.3874 8.09765 7.45279C8.07649 7.51818 8.0737 7.58813 8.0896 7.655L8.7871 10.5987C8.7889 10.6028 8.78908 10.6074 8.7876 10.6116C8.78612 10.6158 8.78308 10.6192 8.77913 10.6212C8.77069 10.6278 8.76835 10.6264 8.76132 10.6212L6.19632 9.0439C6.13724 9.00758 6.06925 8.98835 5.99991 8.98835C5.93056 8.98835 5.86258 9.00758 5.8035 9.0439L3.2385 10.6222C3.23147 10.6264 3.2296 10.6278 3.22069 10.6222C3.21673 10.6202 3.2137 10.6167 3.21222 10.6125C3.21074 10.6083 3.21092 10.6037 3.21272 10.5997L3.91022 7.65593C3.92612 7.58907 3.92333 7.51912 3.90217 7.45373C3.88101 7.38834 3.84228 7.33002 3.79022 7.28515L1.50741 5.3164C1.50178 5.31172 1.49663 5.3075 1.50132 5.29296C1.506 5.27843 1.50975 5.28031 1.51678 5.27937L4.51303 5.0375C4.58176 5.0316 4.64752 5.00687 4.7031 4.96601C4.75867 4.92516 4.8019 4.86977 4.82803 4.80593L5.9821 2.01171C5.98585 2.00375 5.98725 2 5.9985 2C6.00975 2 6.01116 2.00375 6.01491 2.01171L7.17178 4.80593C7.19816 4.86979 7.24167 4.92512 7.2975 4.96582C7.35333 5.00652 7.41932 5.031 7.48819 5.03656L10.4844 5.27843C10.4915 5.27843 10.4957 5.27843 10.4999 5.29203C10.5041 5.30562 10.4999 5.31078 10.4924 5.31546Z"
                  fill="#02F67C"
                />
              </svg>
              <span class="text-[12px] ml-[-4px]">100</span>
            </a>
          </li> */}
          <li>
            <a
              href={props.sign.url}
              class="flex items-center text-[#b6b6b6] md:hover:text-[#fff] font-medium text-[16px] px-4 py-2 transition ease-in-out duration-300"
            >
              {props.sign.label}
            </a>
          </li>
          <li>
            <a
              href={props.demo?.url}
              class="flex items-center hover:shadow-[0_0_40px_0_rgba(2,246,124,0.3)] md:w-auto transition-all duration-300 ease-out border-[#02F67C] border-2 text-base text-[#0A2121] bg-[#02F67C] md:hover:bg-[#2FD180] font-medium text-[16px] max-h-[37px] px-4 py-2 rounded-lg md:transition md:ease-in-out md:duration-300"
            >
              {props.demo?.label}
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
