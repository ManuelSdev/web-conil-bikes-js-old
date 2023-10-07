# crear patrones para aplicar tw intelliSense a más palabras además de class y className

https://stackoverflow.com/questions/69687530/dynamically-build-classnames-in-tailwindcss
Para incluir una expresión regular en tailwindCSS.classAttribute, puedes usar el símbolo de barra vertical (|) para separar las opciones que quieres que se consideren como clases de Tailwind CSS. Por ejemplo, si quieres que se reconozcan los atributos que empiezan por tw o extra, puedes usar la siguiente expresión regular:

“tailwindCSS.classAttributes”: [ “class”, “className”, “ngClass”, “(tw|extra)” ]
"(tw)","(.tw.)"
De esta forma, obtendrás sugerencias de Tailwind CSS cuando escribas el valor de los atributos que coincidan con la expresión regular.

https://github.com/tailwindlabs/tailwindcss/discussions/7554


# trucos
aplica el bg sobre si mismo cuando su hijo tiene hover
    [&:has(:hover)]:bg-blue-600
    ...absurdo, si su hijo tiene hover el padre también lo tiene
aplica bg-accent si el hijo tiene ese aria
    [&:has([aria-selected])]:bg-accent 