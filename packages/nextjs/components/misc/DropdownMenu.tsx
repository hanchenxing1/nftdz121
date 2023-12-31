import { Fragment } from "react";
import FilterIcon from "./../../public/svgs/filter.svg";
import { RadioGroup } from "./RadioGroup";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const DropdownMenu = (props: any) => {
  return (
    <div className="top-16 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            style={{ background: "#650BBF" }}
            className="flex flex-row justify-center items-center gap-2 w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 cursor-pointer transition duration-150 hover:scale-105"
          >
            <FilterIcon stroke="white" />
            <div>Filter</div>
            <ChevronDownIcon className="h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            style={{ background: "#1A1A1A" }}
            className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="px-1 py-1">
              <Menu.Item>
                {({ }) => (
                  <div className={`group w-full rounded-md px-2 py-2 text-sm text-white flex flex-col justify-start`}>
                    Status
                    <RadioGroup filter={props.statusFilter} setFilter={props.setStatusFilter} />
                  </div>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ }) => (
                  <div className={`group w-full rounded-md px-2 py-2 text-sm text-white flex flex-col justify-start`}>
                    Number of NFTs
                    <RadioGroup filter={props.nftNumberFilter} setFilter={props.setNftNumberFilter} />
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
