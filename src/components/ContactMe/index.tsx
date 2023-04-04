import React, { useState } from 'react'
import { Modal } from '../Modal'
import { socials } from '../../constants'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

export const useContactMe = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const toggleModal = () => {
    setModalOpen((prev) => !prev)
  }

  return [
    toggleModal,
    () => (
      <Modal
        size="small"
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className="w-full h-full flex items-center justify-center flex-col">
          <span className="text-white text-xl font-bold">SOCIALS</span>
          <div className="w-40 flex flex-col gap-5 mt-5">
            {socials.map((item) =>
              item.name === 'email' ? (
                <CopyToClipboard
                  text={item.value}
                  onCopy={() => toast.success('Email copied!')}
                >
                  <div className="flex w-full rounded-md bg-gray-200 hover:bg-white text-gray-800 p-3 gap-3 justify-between items-center text-base font-semibold cursor-pointer">
                    <img src={item.icon} alt={item.name} className="w-5" />
                    <span className="capitalize">{item.name}</span>
                    <svg
                      height="16"
                      viewBox="0 0 48 48"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h48v48h-48z" fill="none" />
                      <path d="M32 2h-24c-2.21 0-4 1.79-4 4v28h4v-28h24v-4zm6 8h-22c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4v-28c0-2.21-1.79-4-4-4zm0 32h-22v-28h22v28z" />
                    </svg>
                  </div>
                </CopyToClipboard>
              ) : (
                <a
                  key={item.name}
                  href={item.value}
                  target="_blank"
                  className="flex w-full rounded-md bg-gray-200 hover:bg-white text-gray-800 p-3 gap-3 justify-between items-center text-base font-semibold"
                >
                  <img src={item.icon} alt={item.name} className="w-5" />
                  <span className="capitalize">{item.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="16"
                    height="16"
                  >
                    <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z" />
                  </svg>
                </a>
              )
            )}
          </div>
        </div>
      </Modal>
    ),
  ] as const
}
