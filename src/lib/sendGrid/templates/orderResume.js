import { BIKE_RANGES_MAP, BIKE_TYPES_MAP } from '@/utils/app/appValues'
import { format } from 'date-fns'

const createBikeList = (bikes) => {
   let bikeList = ''
   bikes.forEach((bike) => {
      const {
         modelBrand,
         modelName,
         modelType,
         modelRange,
         bikeSize: size,
         price,
         modelImages,
      } = bike

      const imageUrl = modelImages[0]
      const name = `${modelBrand} ${modelName}`
      const type = BIKE_TYPES_MAP[modelType]
      const range = BIKE_RANGES_MAP[modelRange]

      const bikeText = `
    <tr style="width: 100%">
    <td
       data-id="__react-email-column"
       style="
          width: 20%;
          background-color: rgb(
             241,
             241,
             241
          );
       "
    >
       <a
          href="${imageUrl}"
          style="
             color: #067df7;
             text-decoration: none;
          "
          target="_blank"
          ><img
             alt="Cat"
             src="${imageUrl}"
             style="
                display: block;
                outline: none;
                border: none;
                text-decoration: none;
             "
             width="100%"
          />
       </a>
    </td>
    <td
       data-id="__react-email-column"
       style="
          vertical-align: baseline;
          padding-left: 1rem;
       "
    >
       <div><strong>${name}</strong></div>
       <div>
          Tipo: <strong>${type}</strong>
       </div>
       <div>
          Gama: <strong>${range}</strong>
       </div>
       <div>
          Talla: <strong>${size}</strong>
       </div>
    </td>
    <td
       data-id="__react-email-column"
       style="
          vertical-align: baseline;
          text-align: right;
       "
    >
       <strong>${price}</strong> €/dia
    </td>
 </tr>
    `
      bikeList += bikeText
   })
   return bikeList
}
const getOrderResumeEmail = ({
   name,
   phone,
   email,
   address,
   delivery: del,
   pickup: pick,
   bikesByUnits: bikes,
   dateRangeObj: dateRange,
   dayPrice,
   price: totalPrice,
   duration,
   bookingId,
}) => {
   const bikeList = createBikeList(bikes)
   console.log('dateRange en orderResume ->', dateRange)
   const date = `Del ${format(
      new Date(dateRange.from),
      'dd/MM/yyyy'
   )} al ${format(new Date(dateRange.to), 'dd/MM/yyyy')}`

   const delivery = del
      ? 'Entrega de bicicletas en tienda el día de inicio de la reserva'
      : 'Entrega de bicicletas a domicilio el día previo al inicio de la reserva'

   const pickup = pick
      ? 'Recogida de bicicletas en tienda el día de finalización de la reserva'
      : 'Recogida de bicicletas a domicilio el día posterior al final de la reserva'

   return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
   <head>
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
   </head>
   <div
      style="
         display: none;
         overflow: hidden;
         line-height: 1px;
         opacity: 0;
         max-height: 0;
         max-width: 0;
      "
   >
      Confirmación Conil Bikes
      <div>
          ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
      </div>
   </div>
   <body
      style="
         background-color: rgb(255, 255, 255);
         margin-top: auto;
         margin-bottom: auto;
         margin-left: auto;
         margin-right: auto;
         font-family:
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            'Helvetica Neue',
            Arial,
            'Noto Sans',
            sans-serif,
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji';
         padding-left: 0.5rem;
         padding-right: 0.5rem;
      "
   >
      <table
         align="center"
         width="100%"
         border="0"
         cellpadding="0"
         cellspacing="0"
         role="presentation"
         style="
            max-width: 465px;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(234, 234, 234);
            border-radius: 0.25rem;
            margin-top: 40px;
            margin-bottom: 40px;
            margin-left: auto;
            margin-right: auto;
            padding: 20px;
         "
      >
         <tbody>
            <tr style="width: 100%">
               <td>
                  <table
                     align="center"
                     width="100%"
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     role="presentation"
                  >
                     <tbody>
                        <tr>
                           <td>
                              <div
                                 style="
                                    background-color: rgb(0, 0, 0);
                                    width: 100%;
                                    height: 0.5rem;
                                 "
                              ></div>
                              <div
                                 style="
                                    background-color: hsl(73, 100%, 63%, 1);
                                    width: 100%;
                                    height: 0.125rem;
                                 "
                              ></div>
                              <div
                                 style="
                                    background-color: rgb(0, 0, 0);
                                    width: 100%;
                                    height: 0.5rem;
                                 "
                              ></div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <table
                     align="center"
                     width="100%"
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     role="presentation"
                     style="margin-top: 32px"
                  >
                     <tbody>
                        <tr>
                           <td>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                 viewBox="0 0 1365.333 1024"
                                 width="1365.333pt"
                                 fill="none"
                                 height="1024pt"
                                 class="h-6 w-6"
                                 style="
                                    width: 3rem;
                                    height: 3rem;
                                    display: block;
                                    margin-left: auto;
                                    margin-right: auto;
                                    border-radius: 25% 10%;
                                    border-width: 4px;
                                    border-style: solid;
                                    border-color: hsl(73, 100%, 63%, 1);
                                    background-color: rgb(0, 0, 0);
                                    fill: hsl(73, 100%, 63%, 1);
                                 "
                              >
                                 <defs>
                                    <clipPath
                                       id="_clipPath_e7qLN8q95Pzejz9WSAMf1sDyo1y5kCoM"
                                    >
                                       <rect
                                          width="1365.333"
                                          height="1024"
                                       ></rect>
                                    </clipPath>
                                 </defs>
                                 <g
                                    clip-path="url(#_clipPath_e7qLN8q95Pzejz9WSAMf1sDyo1y5kCoM)"
                                 >
                                    <g>
                                       <clipPath
                                          id="_clipPath_Eobv1T5QIsY449vxXXeoSpKDT59wepxn"
                                       >
                                          <path
                                             d=" M 0 0 L 1365.333 0 L 1365.333 1024 L 0 1024 L 0 0 Z "
                                             fill="rgb(255,255,255)"
                                          ></path>
                                       </clipPath>
                                       <g
                                          clip-path="url(#_clipPath_Eobv1T5QIsY449vxXXeoSpKDT59wepxn)"
                                       >
                                          <g>
                                             <g>
                                                <path
                                                   d=" M 580 406.667 L 467.161 406.667 C 441.865 406.667 418.74 420.935 407.427 443.56 L 279.707 698.989 C 269.356 719.692 270.461 744.457 282.631 764.147 C 294.799 783.836 316.295 796 339.44 796 L 580 796 L 580 816 L 339.44 816 C 314.559 816 294.939 807.903 277.693 790.657 C 260.448 773.412 252.416 753.757 252.416 728.877 C 252.416 715.348 255.443 702.701 261.696 690.196 L 389.391 434.397 C 406.391 400.399 428.921 386.667 467.161 386.667 L 580 386.667 L 580 406.667 Z  M 329.657 404.581 L 201.937 660.465 C 191.067 682.205 185.632 704.981 185.632 728.895 C 185.632 771.652 200.577 807.955 230.469 837.847 C 260.361 867.739 296.683 882.667 339.44 882.667 L 646.667 882.667 L 646.667 729.333 L 339.44 729.333 L 467.161 473.333 L 646.667 473.333 L 646.667 320 L 467.161 320 C 403.751 320 357.919 348.059 329.657 404.581 Z "
                                                   fill-rule="evenodd"
                                                   fill="null"
                                                ></path>
                                             </g>
                                             <g>
                                                <path
                                                   d=" M 1143.512 790.51 C 1126.059 807.855 1106.478 815.999 1081.891 815.999 L 826.45 815.999 C 801.306 815.999 782.596 808.099 765.13 790.525 C 747.788 773.081 740 753.435 740 728.843 L 740 181.333 L 760 181.333 L 760 728.843 C 760 765.727 789.566 795.999 826.45 795.999 L 1081.891 795.999 C 1105.036 795.999 1126.532 783.83 1138.7 764.141 C 1150.868 744.451 1151.975 719.773 1141.624 699.07 L 1013.903 443.606 C 1002.591 420.981 979.466 406.666 954.17 406.666 L 918.667 406.666 L 918.667 386.666 L 954.17 386.666 C 992.408 386.666 1014.94 400.39 1031.915 434.339 L 1159.66 690.302 C 1165.887 702.757 1168.915 715.385 1168.915 728.913 C 1168.915 754.051 1161.079 773.049 1143.512 790.51 Z  M 1219.394 660.363 L 1091.674 404.582 C 1063.412 348.058 1017.571 319.999 954.17 319.999 L 852 319.999 L 852 473.333 L 954.17 473.333 L 1081.891 729.333 L 826.667 729.333 L 826.667 114.666 L 672 114.666 L 672 728.843 C 672 771.237 687.267 807.479 717.159 837.549 C 747.051 867.629 783.691 882.666 826.45 882.666 L 1081.891 882.666 C 1124.283 882.666 1160.51 867.714 1190.588 837.822 C 1220.659 807.929 1235.699 771.605 1235.699 728.847 C 1235.699 704.934 1230.263 682.103 1219.394 660.363"
                                                   fill="null"
                                                ></path>
                                             </g>
                                          </g>
                                       </g>
                                    </g>
                                 </g>
                              </svg>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <h1
                     class=""
                     style="
                        color: rgb(0, 0, 0);
                        font-size: 24px;
                        font-weight: 400;
                        text-align: left;
                        padding: 0px;
                        margin-top: 30px;
                        margin-bottom: 30px;
                        margin-left: 0px;
                        margin-right: 0px;
                     "
                  >
                     Confirmación de tu reserva
                  </h1>
                  <p
                     style="
                        font-size: 14px;
                        line-height: 24px;
                        margin: 16px 0;
                        color: rgb(0, 0, 0);
                     "
                  >
                     Hola ${name},
                  </p>
                  <p
                     style="
                        font-size: 14px;
                        line-height: 24px;
                        margin: 16px 0;
                        color: rgb(0, 0, 0);
                     "
                  >
                     Gracias por tu reserva. A continuación, te mostramos los
                     detalles de la misma:
                  </p>
                  <table
                     align="center"
                     width="100%"
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     role="presentation"
                  >
                     <tbody>
                        <tr>
                           <td>
                             <table
                                align="center"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                >
                                <tbody style="width: 100%">
                                    <tr style="width: 100%">
                                        <td
                                            data-id="__react-email-column"
                                            style="width: 20%"
                                        >
                                            <strong>Código:</strong>
                                        </td>
                                        <td
                                            class=""
                                            data-id="__react-email-column"
                                        >
                                            <strong>${bookingId}</strong>
                                        </td>
                                    </tr>
                                </tbody>
                              </table>                           
                              <table
                                 align="center"
                                 width="100%"
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 role="presentation"
                              >
                                 <tbody style="width: 100%">
                                    <tr style="width: 100%">
                                       <td
                                          data-id="__react-email-column"
                                          style="width: 20%"
                                       >
                                          Nombre:
                                       </td>
                                       <td
                                          class=""
                                          data-id="__react-email-column"
                                       >
                                          <strong>${name}</strong>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table
                                 align="center"
                                 width="100%"
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 role="presentation"
                              >
                                 <tbody style="width: 100%">
                                    <tr style="width: 100%">
                                       <td
                                          data-id="__react-email-column"
                                          style="width: 20%"
                                       >
                                          Teléfono:
                                       </td>
                                       <td
                                          class=""
                                          data-id="__react-email-column"
                                       >
                                          <strong>${phone}</strong>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table
                                 align="center"
                                 width="100%"
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 role="presentation"
                              >
                                 <tbody style="width: 100%">
                                    <tr style="width: 100%">
                                       <td
                                          data-id="__react-email-column"
                                          style="width: 20%"
                                       >
                                          Dirección:
                                       </td>
                                       <td
                                          class=""
                                          data-id="__react-email-column"
                                       >
                                          <strong>${address}</strong>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table
                                 align="center"
                                 width="100%"
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 role="presentation"
                              >
                                 <tbody style="width: 100%">
                                    <tr style="width: 100%">
                                       <td
                                          data-id="__react-email-column"
                                          style="width: 20%"
                                       >
                                          Fecha:
                                       </td>
                                       <td
                                          class=""
                                          data-id="__react-email-column"
                                       >
                                          <strong>${date}</strong>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table
                                 align="center"
                                 width="100%"
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 role="presentation"
                              >
                                 <tbody style="width: 100%">
                                    <tr style="width: 100%">
                                       <td
                                          data-id="__react-email-column"
                                          style="width: 20%"
                                       >
                                          Entrega:
                                       </td>
                                       <td
                                          class=""
                                          data-id="__react-email-column"
                                       >
                                          <strong>${delivery}</strong>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table
                                 align="center"
                                 width="100%"
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 role="presentation"
                              >
                                 <tbody style="width: 100%">
                                    <tr style="width: 100%">
                                       <td
                                          data-id="__react-email-column"
                                          style="width: 20%"
                                       >
                                          Recogida:
                                       </td>
                                       <td
                                          class=""
                                          data-id="__react-email-column"
                                       >
                                          <strong>${pickup}</strong>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <table
                     align="center"
                     width="100%"
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     role="presentation"
                  >
                     <tbody>
                        <tr>
                           <td>
                              <hr
                                 style="
                                    width: 100%;
                                    border: none;
                                    border-top: 1px solid #eaeaea;
                                    border-width: 1px;
                                    border-style: solid;
                                    border-color: rgb(234, 234, 234);
                                    margin-top: 26px;
                                    margin-bottom: 26px;
                                    margin-left: 0px;
                                    margin-right: 0px;
                                 "
                              />
                              <table
                                 align="center"
                                 width="100%"
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 role="presentation"
                              >
                                 <tbody style="width: 100%">
                              ${bikeList}
                                 </tbody>
                              </table>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <table
                     align="center"
                     width="100%"
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     role="presentation"
                  >
                     <tbody>
                        <tr>
                           <td>
                              <hr
                                 style="
                                    width: 100%;
                                    border: none;
                                    border-top: 1px solid #eaeaea;
                                    border-width: 1px;
                                    border-style: solid;
                                    border-color: rgb(234, 234, 234);
                                    margin-top: 26px;
                                    margin-bottom: 26px;
                                    margin-left: 0px;
                                    margin-right: 0px;
                                 "
                              />
                              <table
                                 align="center"
                                 width="100%"
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 role="presentation"
                              >
                                 <tbody style="width: 100%">
                                    <tr style="width: 100%">
                                       <td
                                          class=""
                                          data-id="__react-email-column"
                                          style="vertical-align: baseline"
                                       >
                                          Importe total por día
                                       </td>
                                       <td
                                          data-id="__react-email-column"
                                          style="
                                             vertical-align: baseline;
                                             text-align: right;
                                          "
                                       >
                                          <strong>${dayPrice} €</strong>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table
                                 align="center"
                                 width="100%"
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 role="presentation"
                              >
                                 <tbody style="width: 100%">
                                    <tr style="width: 100%">
                                       <td
                                          class=""
                                          data-id="__react-email-column"
                                          style="vertical-align: baseline"
                                       >
                                          Duración de la reserva
                                       </td>
                                       <td
                                          data-id="__react-email-column"
                                          style="
                                             vertical-align: baseline;
                                             text-align: right;
                                          "
                                       >
                                          <strong>${duration} días</strong>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                              <table
                                 align="center"
                                 width="100%"
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 role="presentation"
                              >
                                 <tbody style="width: 100%">
                                    <tr style="width: 100%">
                                       <td
                                          class=""
                                          data-id="__react-email-column"
                                          style="vertical-align: baseline"
                                       >
                                          <strong>Importe total</strong>
                                       </td>
                                       <td
                                          data-id="__react-email-column"
                                          style="
                                             vertical-align: baseline;
                                             text-align: right;
                                          "
                                       >
                                          <strong>${totalPrice} €</strong>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <p
                     style="
                        font-size: 14px;
                        line-height: 24px;
                        margin: 16px 0;
                        color: rgb(0, 0, 0);
                     "
                  >
                     Saludos.
                  </p>
                  <p
                     style="
                        font-size: 14px;
                        line-height: 24px;
                        margin: 16px 0;
                        color: rgb(0, 0, 0);
                     "
                  >
                     The<strong> Conil Bikes</strong> Team
                  </p>
                  <hr
                     style="
                        width: 100%;
                        border: none;
                        border-top: 1px solid #eaeaea;
                        border-width: 1px;
                        border-style: solid;
                        border-color: rgb(234, 234, 234);
                        margin-top: 26px;
                        margin-bottom: 26px;
                        margin-left: 0px;
                        margin-right: 0px;
                     "
                  />
                  <table
                     align="center"
                     width="100%"
                     border="0"
                     cellpadding="0"
                     cellspacing="0"
                     role="presentation"
                     style="background-color: rgb(239, 68, 68)"
                  >
                     <tbody>
                        <tr>
                           <td>
                              <div
                                 style="
                                    display: flex;
                                    justify-content: space-evenly;
                                    background-color: rgb(0, 0, 0);
                                    padding-top: 0.25rem;
                                    padding-bottom: 0.25rem;
                                 "
                              >
                                 <a
                                    href="https://twitter.com/home"
                                    class="align-center"
                                    style="
                                       color: #067df7;
                                       text-decoration: none;
                                       display: flex;
                                    "
                                    target="_blank"
                                    ><svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="24"
                                       height="24"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="#D5FF40"
                                       stroke-width="2"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       class="lucide lucide-instagram"
                                       style="height: 2rem; width: 2rem"
                                    >
                                       <rect
                                          width="20"
                                          height="20"
                                          x="2"
                                          y="2"
                                          rx="5"
                                          ry="5"
                                       ></rect>
                                       <path
                                          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                       ></path>
                                       <line
                                          x1="17.5"
                                          x2="17.51"
                                          y1="6.5"
                                          y2="6.5"
                                       ></line></svg></a
                                 ><a
                                    href="https://twitter.com/home"
                                    class="align-center"
                                    style="
                                       color: #067df7;
                                       text-decoration: none;
                                       display: flex;
                                    "
                                    target="_blank"
                                    ><svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="24"
                                       height="24"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="#D5FF40"
                                       stroke-width="2"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       class="lucide lucide-twitter"
                                       style="height: 2rem; width: 2rem"
                                    >
                                       <path
                                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                                       ></path></svg></a
                                 ><a
                                    href="https://twitter.com/home"
                                    class="align-center"
                                    style="
                                       color: #067df7;
                                       text-decoration: none;
                                       display: flex;
                                    "
                                    target="_blank"
                                    ><svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="24"
                                       height="24"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="#D5FF40"
                                       stroke-width="2"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       class="lucide lucide-facebook"
                                       style="height: 2rem; width: 2rem"
                                    >
                                       <path
                                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                                       ></path></svg
                                 ></a>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </td>
            </tr>
         </tbody>
      </table>
   </body>
</html>
`
}

export default getOrderResumeEmail
