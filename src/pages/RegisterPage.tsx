import { Link, Navigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegister, useUser } from '../hooks';
import { LuLoader } from 'react-icons/lu';
import { Loader } from '../components/shared/Loader';
import { UserRegisterFormValues, userRegisterSchema } from "../lib/validator";




export const RegisterPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserRegisterFormValues>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            phone: '',

        },
        resolver: zodResolver(userRegisterSchema),
    });

    const {mutate, isPending} = useRegister();
    const {session, isLoading} = useUser();

    const onRegister = handleSubmit((data) => {
        const {email, password, fullName, phone} = data;
        mutate({email, password, fullName, phone});
    });

    if(isLoading)return <Loader/>;
    if(session) return <Navigate to='/' />;




    return <div className="h-full flex flex-col items-center mt-12 gap-5">
        <br />
        <h1 className="text-4xl font-bold capitalize">
            Registrate
        </h1>

        <p className="text-sm font-medium">
            Por favor ingresa los siguientes datos
        </p>

        {
            isPending ? (
                <div className='w-full h-full flex justify-center mt-20'>
                    <LuLoader className="animate-spin" size={60}/>
                </div>
            ) : (
                <>
                <form
                    className="flex flex-col items-center gap-4 w-full mt-10 sm:w-[400px] lg:w-[500px]"
                    onSubmit={onRegister}>
                    <input
                        type="text"
                        placeholder="Nombre completo"
                        className="border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full"
                        {...register('fullName')}
                    />
    
                    {errors.fullName && (
                        <p className='text-red-500'>{errors.fullName.message}</p>
                    )}
    
                    <input
                        type="text"
                        placeholder="Número celular"
                        className="border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full"
                        {...register('phone')}
                    />
    
                    {errors.phone && (
                        <p className='text-red-500'>{errors.phone.message}</p>
                    )}
    
                    <input
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        className="border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full"
                        {...register('email')}
                    />
    
                    {errors.email && (
                        <p className='text-red-500'>{errors.email.message}</p>
                    )}
    
    
                    <input
                        type="password"
                        placeholder="Ingresa una contraseña"
                        className="border border-slate-200 text-black px-5 py-4 placeholder:text-black text-sm rounded-full w-full"
                        {...register('password')}
                    />
    
                    {errors.password && (
                        <p className='text-red-500'>{errors.password.message}</p>
                    )}
    
                    <button className="bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full mt-5 w-full">
                        Registrarme
                    </button>
                </form>
    
                <p className="text-sm text-stone-800">
                    ¿Ya tienes una cuenta?
                    <Link to='/login' className="text-blue-500 font-semibold"> Inicia Sesión</Link>
                </p>
            </>
            )
        }

    </div>
}
