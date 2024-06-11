import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MobileNav = () => {
  return (
    <nav className="block sm:hidden p-4">
      <div className="flex justify-between">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-gray-900">snap</h1>
        </Link>
        <Sheet>
          <SheetTrigger>
            <Image src="/icon-menu.svg" alt="menu" height={20} width={20} />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col mt-10">
              <ul className="container">
                <li>
                  <Select>
                    <SelectTrigger className="w-[150px] border-none ml-5 text-sm font-medium text-gray-700 ">
                      <SelectValue placeholder="Features" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="todo">
                          <div className="flex gap-3 p-1">
                            <Image
                              src="/icon-todo.svg"
                              alt="todo"
                              height={15}
                              width={15}
                            />
                            <p className="text-sm font-medium text-gray-700">
                              Todo
                            </p>
                          </div>
                        </SelectItem>

                        <SelectItem value="calendar">
                          <div className="flex gap-3 p-1">
                            <Image
                              src="/icon-calendar.svg"
                              alt="todo"
                              height={15}
                              width={15}
                            />
                            <p className="text-sm font-medium text-gray-700">
                              Calendar
                            </p>
                          </div>
                        </SelectItem>
                        <SelectItem value="reminders">
                          <div className="flex gap-3 p-1">
                            <Image
                              src="/icon-reminders.svg"
                              alt="todo"
                              height={15}
                              width={15}
                            />
                            <p className="text-sm font-medium text-gray-700">
                              Reminders
                            </p>
                          </div>
                        </SelectItem>
                        <SelectItem value="planning">
                          <div className="flex gap-3 p-1">
                            <Image
                              src="/icon-planning.svg"
                              alt="todo"
                              height={15}
                              width={15}
                            />
                            <p className="text-sm font-medium text-gray-700">
                              Planning
                            </p>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>
                <li>
                  <li className="ml-5 mt-1">
                    <Select>
                      <SelectTrigger className="w-[150px]  border-none">
                        <SelectValue placeholder="Company" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="history">History</SelectItem>
                          <SelectItem value="team">Our Team</SelectItem>
                          <SelectItem value="blog">Blog</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </li>
                </li>
                <li className="mt-3 font-light ml-8">
                  <Link href="/careers">
                    <p className="text-sm font-medium text-gray-700">Careers</p>
                  </Link>
                </li>
                <li className="mt-5 font-light ml-8">
                  <Link href="/about">
                    <p className="text-sm font-medium text-gray-700">About</p>
                  </Link>
                </li>
                <li className="mt-4 font-light ml-7 ring-2 p-2 rounded-md ring-white hover:ring-black cursor-pointer">
                  <Link href="/">
                    <p className="text-sm font-medium text-gray-700">Login</p>
                  </Link>
                </li>
                <li className="mt-4 font-light ring-2 ml-7 p-2 rounded-md ring-white hover:ring-black cursor-pointer">
                  <Link href="/">
                    <p className="text-sm font-medium text-gray-700">
                      Register
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNav;
