import React from 'react'

export default function Tech() {
    return (
      <div id='tech' className="bg-[#11071F] py-24 sm:py-32">
        <div className="max-w-4xl mx-auto p-4">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-400">
          Technology I use..
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_hex_400px.png#joomlaImage://local-images/proxmox/Proxmox_logo_standard_hex_400px.png?width=400&height=60"
              alt="Proxmox"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://ww2.freelogovectors.net/wp-content/uploads/2023/02/react-logo-freelogovectors.net_.png?lossy=1&w=2560&ssl=1"
              alt="React"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://jumpcloud.com/wp-content/uploads/2016/07/AD1.png"
              alt="Active Directory"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://miro.medium.com/v2/resize:fit:505/1*M8WP_RFKNaqRLSujd9Ik3w.png"
              alt="Linux"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png"
              alt="JavaScript"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  
