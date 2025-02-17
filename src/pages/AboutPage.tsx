export const AboutPage = () => {
	return (
		<div className='space-y-5'>
			<h1 className='text-center text-4xl font-semibold tracking-tight mb-5'>
				Nuestra empresa
			</h1>

			<img
				src='https://cdn.pixabay.com/photo/2021/10/02/09/18/airplane-6674689_1280.jpg'
				alt='Imagen de fondo'
				className='h-[500px] w-full object-cover'
			/>

			<div className='flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800'>
				<p>
					CelularesTec es una tienda en línea que se dedica a la
					venta de celulares, fundada en 2021. Nuestro objetivo es
					ofrecer a nuestros clientes la mejor calidad y precio en
					celulares. Contamos con un equipo de profesionales que se
					encargan de seleccionar los mejores productos para ti.
				</p>

				<p>
					En CelularesTec podrás encontrar una amplia variedad de
					celulares de las mejores marcas. Además, contamos con
					promociones y descuentos exclusivos para que puedas comprar
					tu celular al mejor precio.
				</p>

				<h2 className='text-3xl font-semibold tracking-tighh mt-8 mb-4'>
					¡No esperes más y compra tu celular en CelularesTec!
				</h2>

				<p>
					Para más información, no dudes en ponerte en contacto con
					nosotros, a través de nuestro correo electrónico:
					<a href='mailto:correo@celularestec.com'>
						correo@celularestec.com
					</a>{' '}
					o llamado al <a href='tel:333333333'>3333333333</a>
				</p>
			</div>
		</div>
	);
};