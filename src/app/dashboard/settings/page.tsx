import ProfileSetting from "@/components/dashboard/settings/profile";

export default function Settings() {
    return <div className="flex flex-row w-full h-full">
        <div className="w-full md:w-[280px] lg:w-[360px] bg-slate-300 h-full">
            <div className="">
                <div className="text-xl font-medium p-2 px-6">Account</div>
                <div className="flex flex-col space-y-2">
                    <button className="rounded-full bg-slate-400 font-normal p-1 mx-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-492.309q-57.749 0-98.874-41.124-41.125-41.125-41.125-98.874 0-57.75 41.125-98.874 41.125-41.125 98.874-41.125 57.749 0 98.874 41.125 41.125 41.124 41.125 98.874 0 57.749-41.125 98.874-41.125 41.124-98.874 41.124ZM180.001-187.694v-88.922q0-29.384 15.962-54.422 15.961-25.038 42.653-38.5 59.308-29.077 119.654-43.615T480-427.691q61.384 0 121.73 14.538 60.346 14.538 119.654 43.615 26.692 13.462 42.653 38.5 15.962 25.038 15.962 54.422v88.922H180.001ZM240-247.693h480v-28.923q0-12.154-7.039-22.5-7.038-10.346-19.115-16.885-51.692-25.461-105.418-38.577Q534.702-367.693 480-367.693t-108.428 13.115q-53.726 13.116-105.418 38.577-12.077 6.539-19.115 16.885Q240-288.77 240-276.616v28.923Zm240-304.614q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm0 384.614Z" /></svg>
                        <span className="ml-2">MY PROFILE</span>
                    </button>
                    <button className="rounded-full bg-slate-400 font-normal p-1 mx-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"><path d="M168.462-730.001v-59.998h623.076v59.998H168.462Zm1.539 560v-240h-44.616v-59.998l43.077-200h623.076l43.077 200v59.998h-44.616v240h-59.998v-240H549.999v240H170.001Zm59.998-59.998h260.002v-180.002H229.999v180.002Zm-43.385-240h586.772-586.772Zm0 0h586.772l-30.539-140.002H217.153l-30.539 140.002Z" /></svg>

                        <span className="ml-2">YOUR BUSINESS</span>
                    </button>
                    <button className="rounded-l-full bg-slate-100 font-normal p-1 ml-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"><path d="M480.067-100.001q-78.836 0-148.204-29.92-69.369-29.92-120.682-81.21-51.314-51.291-81.247-120.629-29.933-69.337-29.933-148.173t29.92-148.204q29.92-69.369 81.21-120.682 51.291-51.314 120.629-81.247 69.337-29.933 148.173-29.933t148.204 29.92q69.369 29.92 120.682 81.21 51.314 51.291 81.247 120.629 29.933 69.337 29.933 148.173t-29.92 148.204q-29.92 69.369-81.21 120.682-51.291 51.314-120.629 81.247-69.337 29.933-148.173 29.933ZM440-162v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98.29-54.308-179.53Q691.385-740.769 600-776.769V-760q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z" /></svg>

                        <span className="ml-2">LOCALIZATION</span>
                    </button>
                </div>
            </div>

        </div>
        <div className="bg-slate-100 h-full container mx-auto ">
            <div className="max-w-xl p-4">
                <ProfileSetting />
            </div>
        </div>
    </div>

}