# MUTATIONS

    El error de mutation devuelve {error: {status,data}}
    Tanto status como data es lo que pones aqui en el router handler
    catch (error) {
        console.log('### ERROR USERS API route -> ', error)
        return NextResponse.json(data, { status: 500 })
    }
    # clave: parece que el error que catchea es un string, no un objeto
    Si no hay error, devuelve el un objeto {data: algo}
    algo sería el objeto { result: 'ok' }
     return NextResponse.json({ result: 'ok' }, { status: 201 })


    - Si haces unwrap, recibes directamente la response o el throw erro
        Entonces, cuando pones unwrap, tienes que meter el trigger en un
        try catch para pillar el error
        -este catch pilla el objeto de error de tipo {status, data}
