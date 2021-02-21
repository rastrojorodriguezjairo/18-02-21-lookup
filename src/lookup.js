db.filtro.aggregate([
{$lookup:
{
    from: "departamentos",
    localField: "Nombre_departamento",
    foreignField: "_id_departamento",
    as: "departamentos"
}}
])