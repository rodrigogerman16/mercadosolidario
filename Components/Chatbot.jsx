import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import Link from 'next/link'
import Alert from './Alert'

const Chatbot = () => {

  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const staffHandler = () => {
    const email = window.document.querySelector('#chatbot-email').value
    const value = window.document.querySelector('#chatbot-input').value
    const emailValidation = isValidEmail(email)

    if (emailValidation && value.length > 3 && value.length < 1000) {
      setTimeout(() => {
        Alert({ title: 'Chatbot', text: 'Tu mensaje ha sido enviado, un miembro del staff se contactara contigo lo antes posible.', icon: 'success' })
      }, 0)

      fetch('https://pf-backend-mercadosolidario-production.up.railway.app/chat/newchat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          question: value,
          answer: false
        })
      })
    }
    else {
      setTimeout(() => {
        Alert({ title: 'Chatbot', text: 'Los datos ingresados no son validos.', icon: 'error' })
      }, 0)
    }
  }

  const theme = {
    background: '#f5f8fb',
    headerBgColor: '#f472b6',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#f4f4f4',
    botFontColor: '#222',
    userBubbleColor: '#f4f4f4',
    userFontColor: '#222',
  }

  const steps = [
    {
      id: 1,
      message: 'Bienvenido al chatbot, para comenzar, dime tu nombre.',
      trigger: 2
    },
    {
      id: 2,
      user: true,
      validator: (value) => {
        if (/^[a-z]{3,16}$/.test(value) || /^[A-Z]{1}[a-z]{2,15}$/.test(value) || /^[A-Z]{3,16}$/.test(value)) {
          return true
        }
        else {
          return 'Ingresa un nombre valido.';
        }
      },
      trigger: 3
    },
    {
      id: 3,
      message: `Hola {previousValue}! Dime en que te puedo ayudar?`,
      trigger: 4
    },
    {
      id: 4,
      options: [
        { value: 1, label: '¿Que es mercado solidario?', trigger: '4a' },
        { value: 2, label: '¿Es seguro?', trigger: '4b' },
        { value: 3, label: '¿Como dono?', trigger: '4c' },
        { value: 4, label: '¿Como subo de nivel?', trigger: '4d' },
        { value: 5, label: '¿Como me suscribo?', trigger: '4e' },
        { value: 6, label: 'Quiero hablar con un Staff', trigger: '4f' },
      ]
    },
    {
      id: '4a',
      message: "Mercado Solidario es una plataforma que busca ayudar a conectar ONG's con personas que quieran ayudar en diversas causas.",
      trigger: 5
    },
    {
      id: '4b',
      message: "¡Claro que si! El equipo de Mercado Solidario se encarga de verificar que las ONG's sean reales y que las donaciones sean seguras.",
      trigger: 5
    },
    {
      id: '4c',
      message: "Puedes donar desde la pagina de la iniciativa a la que quieras ayudar mediante PayPal.",
      trigger: 5
    },
    {
      id: '4d',
      message: "Puedes ir subiendo de nivel a medida de que participes en iniciativas, de esta manera podrás desbloquear mejores insignias y mas beneficios.",
      trigger: 5
    },
    {
      id: '4e',
      message: "Puedes suscribirte mediante un pago mensual en PayPal, de esta manera podrás asegurarte de que apoyaras a una ONG todos los meses.",
      trigger: 5
    },
    {
      id: '4f',
      message: 'Lo siento si no he podido ayudarte, deja tu mensaje y un miembro de Mercado Solidario se contactara contigo lo antes posible en tu email.',
      trigger: '5a'
    },
    {
      id: '5a',
      component: (
        <div className='flex flex-col items-start justify-center gap-4'>
          <input type={'email'} placeholder='Ingresa tu email' id='chatbot-email'></input>
          <input type={'text'} placeholder='Ingresa tu pregunta' id='chatbot-input'></input>
          <button onClick={staffHandler} className='font-semibold text-white bg-pink-400 px-6 py-2 hover:bg-pink-300 transition-colors rounded m-auto'>Enviar</button>
        </div>
      ),
      end: true
    },
    {
      id: 5,
      message: 'He podido ayudarte?',
      trigger: 6
    },
    {
      id: 6,
      options: [
        { value: 1, label: '¡Si! Gracias.', trigger: '7' },
        { value: 2, label: 'No, quiero hablar con un staff', trigger: '4f' },
      ]
    },
    {
      id: 7,
      message: '¿Puedo ayudarte en algo mas?',
      trigger: 8
    },
    {
      id: 8,
      options: [
        { value: 1, label: '¡Si!', trigger: '9' },
        { value: 2, label: 'No, gracias.', trigger: '9b' },
      ]
    },
    {
      id: 9,
      message: 'Dime, ¿en que te puedo ayudar?',
      trigger: 4
    },
    {
      id: '9b',
      message: 'Espero haberte ayudado, ¡Hasta luego!',
      end: true
    },
  ];

  return (
    <div className='fixed bottom-4 right-4'>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} floating='true' headerTitle='Mercado Solidario Bot' placeholder='Escribe tu pregunta' />
      </ThemeProvider>
    </div>
  )
}

export default Chatbot