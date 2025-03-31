"use client"

import { LuMinus, LuPlus } from "react-icons/lu"
import { formatPrice } from "../../helpers"
import { useCartStore } from "../../store/cart.store"

export interface ICartItem {
  variantId: string
  productId: string
  name: string
  color: string
  storage: string
  price: number
  quantity: number
  image: string
}

interface Props {
  item: ICartItem
}

export const CartItem = ({ item }: Props) => {
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)

  //TODO:
  const increment = () => {
    updateQuantity(item.variantId, item.quantity + 1)
  }

  const decrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.variantId, item.quantity - 1)
    }
  }

  return (
    <li className="flex justify-between items-center gap-5">
      <div className="flex">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-20 h-20 object-contain rounded-md border border-gray-200 bg-gray-50 p-1"
        />
      </div>
      <div className="flex-1 space-y-3">
        <div className="flex justify-between">
          <p className="font-semibold text-gray-800">{item.name}</p>
          <p className="text-sm font-medium text-[#2563EB] mt-1">{formatPrice(item.price)}</p>
        </div>

        <div className="flex gap-3">
          <p className="text-[13px] text-gray-600">{item.storage}</p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-5 px-2 py-1 border border-slate-200 w-fit rounded-full">
            <button
              onClick={decrement}
              disabled={item.quantity === 1}
              className={`text-gray-600 hover:text-[#2563EB] transition-colors ${item.quantity === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <LuMinus size={15} />
            </button>
            <span className="text-slate-500 text-sm">{item.quantity}</span>
            <button onClick={increment} className="text-gray-600 hover:text-[#2563EB] transition-colors">
              <LuPlus size={15} />
            </button>
          </div>

          <button
            className="text-[#2563EB] hover:text-[#1d4ed8] font-medium text-[10px] transition-colors"
            onClick={() => removeItem(item.variantId)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  )
}

