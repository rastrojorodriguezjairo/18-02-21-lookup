db.departamentos.drop()
db.departamentos.insertMany([
    {
        _id_departamento: 1,
        Nombre_departamento: "Informatica",
        Sueldo: "15",
        Jefe_de_departamento: "Jairo"
    },
    {
        __id_departamento: 2,
        Nombre_departamento: "Recursos humanos",
        Sueldo: "11",
        Jefe_de_departamento: "Lilia"
    },
    {
        _id_departamento: 3,
        Nombre_departamento: "Seguridad",
        Sueldo: "13",
        Jefe_de_departamento: "Silvia"
    },
    {
        _id_departamento: 4,
        Nombre_departamento: "Administración",
        Sueldo: "10",
        Jefe_de_departamento: "Nathan"
    },
    {   _id_departamento : 5,
        Nombre_departamento: "Limpieza",
        Sueldo: "8",
       Jefe_de_departamento: "Yesica"
    },
]);