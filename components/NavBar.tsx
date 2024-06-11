import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between">
        <ul className="flex gap-3 mt-4 ml-4">
          <li className="mt-1">
            <Link href="/">
              <h1 className="text-xl font-extrabold">snap</h1>
            </Link>
          </li>

          <li>
            <Select>
              <SelectTrigger className="w-[110px] border-none ml-5 ">
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
                      <p className="text-sm font-medium text-gray-700">Todo</p>
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
            <Select>
              <SelectTrigger className="w-[110px] border-none">
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

          <li className="mt-2 font-light ml-2">
            <Link href="/">
              <p>Careers</p>
            </Link>
          </li>
        </ul>

        <ul className="flex gap-5 mr-4 px-2">
          <li className="mt-4 font-light ring-2 p-2 rounded-md ring-white hover:ring-black">
            <Link href="/">
              <p>Login</p>
            </Link>
          </li>
          <li className="mt-4 font-light ring-2 p-2 rounded-md ring-white hover:ring-black">
            <Link href="/">
              <p>Register</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
