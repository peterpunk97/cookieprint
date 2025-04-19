import { useForm } from "react-hook-form";
import { type AddressFormValues, addressSchema } from "../../lib/validator";
import { InputAddress } from "./InputAddress";
import { zodResolver } from "@hookform/resolvers/zod";
import { ItemsCheckout } from "./ItemsCheckout";
import { useCreateOrder } from "../../hooks";
import { useCartStore } from "../../store/cart.store";
import { ImSpinner2 } from "react-icons/im";

export const FormCheckout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
  });

  const { mutate: createOrder, isPending } = useCreateOrder();
  const cleanCart = useCartStore((state) => state.cleanCart);
  const cartItems = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.totalAmount);

  const onSubmit = handleSubmit((data) => {
    const orderInput = {
      address: data,
      cartItems: cartItems.map((item) => ({
        variantId: item.variantId,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount,
    };

    createOrder(orderInput, {
      onSuccess: () => cleanCart(),
    });
  });

  if (isPending) {
    return (
      <div className="flex flex-col gap-4 min-h-[70vh] items-center justify-center text-center">
        <ImSpinner2 className="animate-spin h-10 w-10 text-[#2563EB]" />
        <p className="text-base font-medium text-gray-700">
          Procesando tu pedido...
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-10" onSubmit={onSubmit}>
      {/* Dirección */}
      <section className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-gray-800">Dirección de entrega</h3>

        <InputAddress
          register={register}
          errors={errors}
          name="addressLine1"
          placeholder="Dirección principal"
        />
        <InputAddress
          register={register}
          errors={errors}
          name="addressLine2"
          placeholder="Dirección adicional (Opcional)"
        />
        <InputAddress
          register={register}
          errors={errors}
          name="state"
          placeholder="Estado / Provincia"
        />
        <InputAddress
          register={register}
          errors={errors}
          name="city"
          placeholder="Ciudad"
        />
        <InputAddress
          register={register}
          errors={errors}
          name="postalCode"
          placeholder="Código Postal (Opcional)"
        />

        <div>
          <label htmlFor="country" className="text-sm font-medium text-gray-700 mb-1 block">
            País
          </label>
          <select
            id="country"
            {...register("country")}
            className="w-full border border-slate-200 rounded-md px-3 py-2 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] outline-none text-sm"
          >
            <option value="México">México</option>
          </select>
        </div>
      </section>

      {/* Envío */}
      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-gray-700">Método de envío</h3>
        <div className="flex justify-between items-center text-sm border border-[#2563EB] bg-blue-50 py-4 rounded-md px-6">
          <span>Standard</span>
          <span className="font-semibold">Gratis</span>
        </div>
      </section>

      {/* Método de pago */}
      <section className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Método de pago</h3>

        <div className="flex justify-between items-center text-sm border border-[#2563EB] bg-blue-50 py-4 rounded-ss-md rounded-se-md px-6">
          <span>Depósito Bancario</span>
        </div>

        <div className="bg-blue-50 text-[13px] p-5 space-y-0.5 border border-[#2563EB] rounded-es-md rounded-ee-md">
          <p>Compra mediante transferencia bancaria</p>
          <p><strong>Razón Social:</strong> JESUS FLORES PROCEL</p>
          <p><strong>Tipo de cuenta:</strong> STP</p>
          <p><strong>CLABE:</strong> 699180000006070608</p>
          <p>Los datos serán reenviados tras confirmar el pedido.</p>
        </div>
      </section>

      {/* Resumen */}
      <section className="flex flex-col gap-4">
        <h3 className="font-semibold text-2xl text-gray-800">Resumen del pedido</h3>
        <ItemsCheckout />
      </section>

      {/* Botón */}
      <div>
        <button
          type="submit"
          className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-3.5 font-bold tracking-wide rounded-full w-full transition-colors"
        >
          Finalizar Pedido
        </button>
      </div>
    </form>
  );
};
