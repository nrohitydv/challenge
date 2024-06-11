import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="lg:ml-[50px] sm:block hidden">
      <div className="flex justify-between mr-5">
        <ul className="flex items-center gap-5 p-5">
          <li className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-3xl font-extrabold">snap</h1>
            </Link>
          </li>

          <li className="flex-shrink-0 min-w-[110px]">
            <Select>
              <SelectTrigger className="w-full border-none text-sm font-medium text-gray-700">
                <SelectValue placeholder="Features" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="todo">
                    <div className="flex gap-2">
                      <Image
                        src="/icon-todo.svg"
                        alt="todo"
                        height={15}
                        width={15}
                      />
                      <p className="text-sm font-medium text-gray-700">Todo</p>
                    </div>
                  </SelectItem>
                  <SelectItem value="calendar">
                    <div className="flex gap-2">
                      <Image
                        src="/icon-calendar.svg"
                        alt="calendar"
                        height={15}
                        width={15}
                      />
                      <p className="text-sm font-medium text-gray-700">
                        Calendar
                      </p>
                    </div>
                  </SelectItem>
                  <SelectItem value="reminders">
                    <div className="flex gap-2">
                      <Image
                        src="/icon-reminders.svg"
                        alt="reminders"
                        height={15}
                        width={15}
                      />
                      <p className="text-sm font-medium text-gray-700">
                        Reminders
                      </p>
                    </div>
                  </SelectItem>
                  <SelectItem value="planning">
                    <div className="flex gap-2">
                      <Image
                        src="/icon-planning.svg"
                        alt="planning"
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

          <li className="flex-shrink-0 min-w-[110px]">
            <Select>
              <SelectTrigger className="w-full border-none text-sm font-medium text-gray-700">
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent className="items-center">
                <SelectGroup>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="team">Our Team</SelectItem>
                  <SelectItem value="blog">Blog</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </li>

          <li className="flex-shrink-0 min-w-[110px]">
            <Link href="/careers">
              <p className="text-sm font-medium text-gray-700">Careers</p>
            </Link>
          </li>
        </ul>

        <ul className="flex items-center gap-5 p-5">
          <li className="w-24 font-light ring-1 p-2 rounded-md ring-white hover:ring-black cursor-pointer">
            <Link href="/">
              <p className="text-sm font-medium ml-5 text-gray-700">Login</p>
            </Link>
          </li>
          <li className="w-24 font-light ring-1 p-2 rounded-md ring-white hover:ring-black cursor-pointer">
            <Link href="/">
              <p className="text-sm font-medium ml-4 text-gray-700">Register</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
