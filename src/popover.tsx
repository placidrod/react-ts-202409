import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import CBox from './c-box';

export default function Pop() {
  return (
    <div className="flex full justify-center pt-20">
      <div className="flex gap-8">
        <div className="text-sm/6 font-semibold text-black/50">Products</div>
        <div className="text-sm/6 font-semibold text-black/50">Pricing</div>
        <Popover __demoMode>
          <PopoverButton className="block text-sm/6 font-semibold text-black/50 focus:outline-none data-[active]:text-black data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-black">
            Solutions
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom end"
            portal
            className="divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:10px] data-[closed]:-translate-y-1 data-[closed]:opacity-0 border border-black w-96"
          >
            <div className="p-3">
              {/* <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white"
                href="#"
              >
                <p className="font-semibold text-black">Insights</p>
                <p className="text-black/50">Measure actions your users take</p>
              </a> */}
              {/* <div className="py-2 px-3">
                <CBox />
              </div> */}
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white"
                href="#"
              >
                <p className="font-semibold text-black">Automations</p>
                <p className="text-black/50">
                  Create your own targeted content
                </p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white"
                href="#"
              >
                <p className="font-semibold text-black">Reports</p>
                <p className="text-black/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white"
                href="#"
              >
                <p className="font-semibold text-black">Documentation</p>
                <p className="text-black/50">
                  Start integrating products and tools
                </p>
                <CBox />
              </a>
            </div>
            <div className="py-2 px-3">{/* <CBox /> */}</div>
            <div className="py-2 px-3 mt-8">
              <p className="text-black/50">
                Start integrating products and tools
              </p>
              {/* <CBox /> */}
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}
