import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProductFormValues, productSchema } from "../../../lib/validator";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { SectionFormProduct } from "./SectionFormProduct";
import { InputForm } from "./InputForm";
import { FeaturesInput } from "./FeaturesInput";
import { useEffect } from "react";
import { generateSlug } from "../../../helpers";
import { VariantsInput } from "./VariantsInput";
import { UploaderImages } from "./UploaderImages";
import { Editor } from './Editor';
import { useCreateProduct } from "../../../hooks/products/useCreateProduct";
import { Loader } from "../../shared/Loader";
import { useProduct, useUpdateProduct } from "../../../hooks";
import { JSONContent } from "@tiptap/react";

interface Props {
	titleForm: string;
}

export const FormProduct = ({ titleForm }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		control,
	} = useForm<ProductFormValues>({
		resolver: zodResolver(productSchema),
	});

	const { slug } = useParams<{ slug: string }>();
	const { product, isLoading } = useProduct(slug || '');
	const { mutate: createProduct, isPending } = useCreateProduct();
	const { mutate: updateProduct, isPending: isUpdatePending } =
		useUpdateProduct(product?.id || '');

	const navigate = useNavigate();

	useEffect(() => {
		if (product && !isLoading) {
			setValue('name', product.name);
			setValue('slug', product.slug);
			setValue('brand', product.brand);
			setValue('features', product.features.map((f: string) => ({ value: f })));
			setValue('description', product.description as JSONContent);
			setValue('images', product.images);
			setValue('variants', product.variants.map(v => ({
				id: v.id,
				stock: v.stock,
				price: v.price,
				storage: v.storage,
				color: v.color,
				colorName: v.color_name,
			})));
		}
	}, [product, isLoading, setValue]);

	const onSubmit = handleSubmit(data => {
		const features = data.features.map(feature => feature.value);
		const payload = {
			name: data.name,
			brand: data.brand,
			slug: data.slug,
			variants: data.variants,
			images: data.images,
			description: data.description,
			features,
		};

		if (slug) {
			updateProduct(payload);
		} else {
			createProduct(payload);
		}
	});

	const watchName = watch('name');

	useEffect(() => {
		if (!watchName) return;
		const generatedSlug = generateSlug(watchName);
		setValue('slug', generatedSlug, { shouldValidate: true });
	}, [watchName, setValue]);

	if (isPending || isUpdatePending || isLoading) return <Loader />;

	return (
		<div className="flex flex-col gap-6 px-2 sm:px-4 lg:px-8 py-4">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div className="flex items-center gap-3">
					<button
						className="bg-white p-2 rounded-md shadow-sm border border-slate-200 transition-all group hover:scale-105"
						onClick={() => navigate(-1)}
					>
						<IoIosArrowBack
							size={18}
							className="transition-all group-hover:scale-125"
						/>
					</button>
					<h2 className="font-bold tracking-tight text-2xl capitalize">
						{titleForm}
					</h2>
				</div>

				<div className="flex gap-3 self-end sm:self-auto">
					<button
						className="btn-secondary-outline"
						type="button"
						onClick={() => navigate(-1)}
					>
						Cancelar
					</button>
					<button className="btn-primary" type="submit" form="product-form">
						Guardar Producto
					</button>
				</div>
			</div>

			{/* Formulario */}
			<form
				id="product-form"
				onSubmit={onSubmit}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
			>
				<SectionFormProduct
					titleSection="Detalles del Producto"
					className="md:col-span-2 lg:col-span-2 lg:row-span-2"
				>
					<InputForm
						type="text"
						placeholder="Ejemplo: Camisa sublimada"
						label="nombre"
						name="name"
						register={register}
						errors={errors}
						required
					/>
					<FeaturesInput control={control} errors={errors} />
				</SectionFormProduct>

				<SectionFormProduct>
					<InputForm
						type="text"
						label="Etiqueta"
						name="slug"
						placeholder="taza-sublimacion-personalizada"
						register={register}
						errors={errors}
					/>

					<InputForm
						type="text"
						label="Categoría"
						name="brand"
						placeholder="Sublimación"
						register={register}
						errors={errors}
						required
					/>
				</SectionFormProduct>

				<SectionFormProduct
					titleSection="Variantes del Producto"
					className="md:col-span-2 lg:col-span-2"
				>
					<VariantsInput
						control={control}
						errors={errors}
						register={register}
					/>
				</SectionFormProduct>

				<SectionFormProduct titleSection="Imágenes del producto">
					<UploaderImages
						errors={errors}
						setValue={setValue}
						watch={watch}
					/>
				</SectionFormProduct>

				<SectionFormProduct
					titleSection="Descripción del producto"
					className="col-span-full"
				>
					<Editor
						setValue={setValue}
						errors={errors}
						initialContent={product?.description as JSONContent}
					/>
				</SectionFormProduct>
			</form>
		</div>
	);
};
