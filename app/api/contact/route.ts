import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'paulbrock060@gmail.com',
    pass: 'mxwj ngyh ragd uvem'
  },
});

const recipientEmails = [
  'gregorisvprotovex@gmail.com',
  'cristianfprotovex@gmail.com',
  'germanpprotovex@gmail.com'
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    const logoPath = path.join(process.cwd(), 'public', 'img', 'logoblackk.png');
    const logoAttachment = {
      filename: 'logoblackk.png',
      path: logoPath,
      cid: 'company-logo'
    };

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nueva solicitud de contacto</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #ffffff; font-family: Arial, sans-serif;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; padding: 20px;">
            <tr>
              <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <!-- Logo y Título -->
                  <tr>
                    <td style="text-align: center; padding: 30px;">
                      <img src="cid:company-logo" alt="Protovex" style="width: 200px; height: auto; margin-bottom: 20px;">
                      <h1 style="margin: 0; color: #FF6B00; font-size: 24px; font-weight: normal;">
                        Nueva solicitud de contacto
                      </h1>
                    </td>
                  </tr>

                  <!-- Contenido -->
                  <tr>
                    <td style="padding: 0 30px;">
                      <p style="color: #333333; font-size: 16px; margin-bottom: 25px;">
                        Estimado equipo,
                      </p>
                      <p style="color: #333333; font-size: 16px; margin-bottom: 25px;">
                        Se ha recibido una nueva solicitud de contacto a través del sitio web de Protovex para servicios profesionales.
                      </p>
                      <p style="color: #333333; font-size: 16px; margin-bottom: 25px;">
                        A continuación, se detallan los datos proporcionados:
                      </p>

                      <!-- Tabla de datos -->
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse; margin-bottom: 30px;">
                        <tr>
                          <td style="padding: 12px; background-color: #f8f9fa; border: 1px solid #dee2e6;">
                            <strong style="color: #333333; width: 150px; display: inline-block;">Nombre</strong>
                          </td>
                          <td style="padding: 12px; border: 1px solid #dee2e6;">
                            <span style="color: #666666;">${name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px; background-color: #f8f9fa; border: 1px solid #dee2e6;">
                            <strong style="color: #333333; width: 150px; display: inline-block;">Correo electrónico</strong>
                          </td>
                          <td style="padding: 12px; border: 1px solid #dee2e6;">
                            <span style="color: #666666;">${email}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px; background-color: #f8f9fa; border: 1px solid #dee2e6;">
                            <strong style="color: #333333; width: 150px; display: inline-block;">Teléfono</strong>
                          </td>
                          <td style="padding: 12px; border: 1px solid #dee2e6;">
                            <span style="color: #666666;">${phone}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px; background-color: #f8f9fa; border: 1px solid #dee2e6;">
                            <strong style="color: #333333; width: 150px; display: inline-block;">Asunto</strong>
                          </td>
                          <td style="padding: 12px; border: 1px solid #dee2e6;">
                            <span style="color: #666666;">${subject}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px; background-color: #f8f9fa; border: 1px solid #dee2e6;">
                            <strong style="color: #333333; width: 150px; display: inline-block;">Mensaje</strong>
                          </td>
                          <td style="padding: 12px; border: 1px solid #dee2e6;">
                            <span style="color: #666666;">${message}</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px; text-align: center; color: #999999; font-size: 14px; border-top: 1px solid #EEEEEE;">
                      © ${new Date().getFullYear()} Protovex. Todos los derechos reservados.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const mailOptions = {
      from: 'paulbrock060@gmail.com',
      to: recipientEmails.join(','),
      subject: `Nueva solicitud de contacto: ${subject}`,
      html: htmlTemplate,
      attachments: [logoAttachment]
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
} 