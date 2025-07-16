import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            idcard: user.idcard,
            foto: user.foto,
            site: user.site,
            tempat_tgl_lahir: user.tempat_tgl_lahir,
            ktp: user.ktp,
            alamat: user.alamat,
            domisili: user.domisili,
            whatsapp: user.whatsapp,
            bank: user.bank,
            no_rekening: user.no_rekening,
            npwp: user.npwp,
            ukuran_seragam: user.ukuran_seragam,
            divisi: user.divisi,

        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}
                <div>
                    <InputLabel htmlFor="idcard" value="ID Card" />

                    <TextInput
                        id="idcard"
                        className="mt-1 block w-full"
                        value={data.idcard}
                        onChange={(e) => setData('idcard', e.target.value)}
                        required
                        isFocused
                        autoComplete="idcard"
                    />

                    <InputError className="mt-2" message={errors.idcard} />
                </div>

                <div>
                    <InputLabel htmlFor="foto" value="Foto" />

                    <TextInput
                        id="foto"
                        className="mt-1 block w-full"
                        value={data.foto}
                        onChange={(e) => setData('foto', e.target.value)}
                        required
                        isFocused
                        autoComplete="foto"
                    />

                    <InputError className="mt-2" message={errors.foto} />
                </div>

                <div>
                    <InputLabel htmlFor="site" value="Site" />

                    <TextInput
                        id="site"
                        className="mt-1 block w-full"
                        value={data.site}
                        onChange={(e) => setData('site', e.target.value)}
                        required
                        isFocused
                        autoComplete="site"
                    />

                    <InputError className="mt-2" message={errors.site} />
                </div>

                <div>
                    <InputLabel htmlFor="tempat_tgl_lahir" value="Tempat Tanggal Lahir" />

                    <TextInput
                        id="tempat_tgl_lahir"
                        className="mt-1 block w-full"
                        value={data.tempat_tgl_lahir}
                        onChange={(e) => setData('tempat_tgl_lahir', e.target.value)}
                        required
                        isFocused
                        autoComplete="tempat_tgl_lahir"
                    />

                    <InputError className="mt-2" message={errors.tempat_tgl_lahir} />
                </div>

                <div>
                    <InputLabel htmlFor="ktp" value="Nomor Induk Penduduk" />

                    <TextInput
                        id="ktp"
                        className="mt-1 block w-full"
                        value={data.ktp}
                        onChange={(e) => setData('ktp', e.target.value)}
                        required
                        isFocused
                        autoComplete="ktp"
                    />

                    <InputError className="mt-2" message={errors.ktp} />
                </div>

                <div>
                    <InputLabel htmlFor="alamat" value="Alamat" />

                    <TextInput
                        id="alamat"
                        className="mt-1 block w-full"
                        value={data.alamat}
                        onChange={(e) => setData('alamat', e.target.value)}
                        required
                        isFocused
                        autoComplete="alamat"
                    />

                    <InputError className="mt-2" message={errors.alamat} />
                </div>

                <div>
                    <InputLabel htmlFor="domisili" value="Domisili" />

                    <TextInput
                        id="domisili"
                        className="mt-1 block w-full"
                        value={data.domisili}
                        onChange={(e) => setData('domisili', e.target.value)}
                        required
                        isFocused
                        autoComplete="domisili"
                    />

                    <InputError className="mt-2" message={errors.domisili} />
                </div>

                <div>
                    <InputLabel htmlFor="whatsapp" value="Nomor Whatsapp" />

                    <TextInput
                        id="whatsapp"
                        className="mt-1 block w-full"
                        value={data.whatsapp}
                        onChange={(e) => setData('whatsapp', e.target.value)}
                        required
                        isFocused
                        autoComplete="whatsapp"
                    />

                    <InputError className="mt-2" message={errors.whatsapp} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
