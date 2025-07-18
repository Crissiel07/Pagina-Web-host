'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Función para limpiar el mensaje después de 5 segundos
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (successMessage) {
      timeoutId = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [successMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setSuccessMessage('¡Gracias por contactarnos! Su solicitud ha sido recibida exitosamente. Nuestro equipo se pondrá en contacto con usted dentro de las próximas 24 horas hábiles.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-orange-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Envía un mensaje</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-zinc-900/50 border-zinc-700 focus:border-orange-500 focus:ring-orange-500/20"
              placeholder="Tu Nombre"
              required
            />
            </div>
            <div className="space-y-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-zinc-900/50 border-zinc-700 focus:border-orange-500 focus:ring-orange-500/20"
              placeholder="Tu Email"
              required
            />
            </div>
            <div className="space-y-2">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-zinc-900/50 border-zinc-700 focus:border-orange-500 focus:ring-orange-500/20"
              placeholder="Tu Teléfono"
              required
            />
            </div>
            <div className="space-y-2">
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-zinc-900/50 border-zinc-700 focus:border-orange-500 focus:ring-orange-500/20"
              placeholder="Asunto"
              required
            />
            </div>
            <div className="space-y-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-zinc-900/50 border-zinc-700 focus:border-orange-500 focus:ring-orange-500/20"
              placeholder="Tu Mensaje"
              rows={5}
              required
            />
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-amber-500 hover:to-orange-500 border-0"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  Enviando...
                  <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                </>
                ) : (
                  <>
                  Enviar Mensaje
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send ml-2 h-4 w-4">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                  </>
                )}
            </button>
            {successMessage && (
              <div className="mt-4 p-4 rounded-lg bg-zinc-900/50 border border-orange-500/20 text-white text-sm animate-fade-in">
                {successMessage}
              </div>
            )}
          </form>
        </div>
      </div>
  );
}
