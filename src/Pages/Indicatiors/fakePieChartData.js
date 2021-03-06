import { styleGuideColors } from "../../theme/colors";

export const linksData = [
  {
    href: "/direction/query",
    children: "Atención de acuerdos enviados y recibidos"
  },
  {
    href: "/login",
    children: "Acuerdos enviados por área/empleado/clasificación"
  },
  {
    href: "/direction",
    children: "Acuerdos recibidos por área/empleado/clasificación"
  },
  {
    href: "/indicators",
    children: "Acuerdos recibidos por Eje"
  },
  {
    href: "/",
    children: "Indicador focos problemáticos"
  }
];

export default [
  {
    header: "Enviados",
    series: [
      {
        name: "Sugerencia",
        color: styleGuideColors.pumpkin,
        statistics: [
          {
            number: 5,
            status: "UNREAD"
          },
          {
            number: 3,
            status: "PENDING"
          },
          {
            number: 37,
            status: "DONE"
          }
        ]
      },
      {
        name: "Solicitud",
        color: styleGuideColors.darkSkyBlue,
        statistics: [
          {
            number: 205,
            status: "UNREAD"
          },
          {
            number: 73,
            status: "PENDING"
          },
          {
            number: 1244,
            status: "DONE"
          }
        ]
      },
      {
        name: "Conocimiento",
        color: styleGuideColors.purpley,
        statistics: [
          {
            number: 141,
            status: "UNREAD"
          },
          {
            number: 37,
            status: "PENDING"
          },
          {
            number: 1017,
            status: "DONE"
          }
        ]
      },
      {
        name: "Problemática",
        color: styleGuideColors.greenyBlue,
        statistics: [
          {
            number: 178,
            status: "UNREAD"
          },
          {
            number: 35,
            status: "PENDING"
          },
          {
            number: 631,
            status: "DONE"
          }
        ]
      }
    ]
  },
  {
    header: "Recibidos",
    series: [
      {
        name: "Sugerencia",
        color: styleGuideColors.pumpkin,
        statistics: [
          {
            number: 5,
            status: "UNREAD"
          },
          {
            number: 5,
            status: "PENDING"
          },
          {
            number: 37,
            status: "DONE"
          }
        ]
      },
      {
        name: "Solicitud",
        color: styleGuideColors.darkSkyBlue,
        statistics: [
          {
            number: 205,
            status: "UNREAD"
          },
          {
            number: 73,
            status: "PENDING"
          },
          {
            number: 1244,
            status: "DONE"
          }
        ]
      },
      {
        name: "Conocimiento",
        color: styleGuideColors.purpley,
        statistics: [
          {
            number: 141,
            status: "UNREAD"
          },
          {
            number: 37,
            status: "PENDING"
          },
          {
            number: 1017,
            status: "DONE"
          }
        ]
      },
      {
        name: "Problemática",
        color: styleGuideColors.greenyBlue,
        statistics: [
          {
            number: 178,
            status: "UNREAD"
          },
          {
            number: 35,
            status: "PENDING"
          },
          {
            number: 631,
            status: "DONE"
          }
        ]
      }
    ]
  }
];
