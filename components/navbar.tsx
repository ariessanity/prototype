import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";
import { Divider } from "@heroui/divider";

export const Navbar = () => {
  return (
    <HeroUINavbar className="border-b-1 shadow-small" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button className="text-md text-primary-default font-normal border-primary-default" variant="bordered">
            Log in
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button className="text-md font-normal bg-primary-default text text-primary-foreground" variant="solid">
            Start Test
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="grid gap-2 pb-4 pt-3 space-y-6">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href="#"
                size="lg"
                className='rounded-lg py-2 text-base leading-7 text-gray-500 hover:bg-gray-50'
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <Divider />
          <Button className="h-[60px] text-lg text-primary-default font-normal border-primary-default hover:bg-primary-default hover:text-primary-foreground" variant="bordered">
            Log in
          </Button>
          <Button className="h-[60px] text-lg font-normal bg-primary-default text text-primary-foreground" variant="solid">
            Start Test
          </Button>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
