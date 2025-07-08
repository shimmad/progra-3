-- Proyecto final: sistema de ejercicios para entrenar en casa--

Aplicación web para entrenamiento funcional que permite a los usuarios seguir desafíos mensuales (challenges), ver videos de ejercicios clasificados por tipo y comprar productos de entrenamiento.
Los usuarios pueden registrarse y marcar los días que completaron un challenge.
Los administradores pueden crear, editar y borrar desafíos y videos.

funciones:
/home --> descripcion gral, login/registro
/challenges --> ver desafio y completarlo
/ejercicios --> galeria de video por tipo
/tienda --> ver productos
/admin --> dashbord para CRUD (solo si sos admi)

-- entidades,

usuario: id, nombre, mail, contraseña, rol (admin,user)--> tiene muchos challenges, un admin puede gestionar todo

challenge: id, nombre, descripcion, fecha_inicio, fecha_fin --> tiene muchos ejercicios

Ejercicio: id, nombre, tipo (ub,lb,fb,flex), video_url, descripcion --> un ejerrcicio puede estar en varios challenges

Seguimiento: id, usuario_id, challenge_id, dia, completado(bool) --> un usuario tien muchos seguimientos

Producto: id, nombre, descripcion, precio, img --> para tienda, un usuario puede tener muchas compras?

Challengeejercicio: challenge id ejercicio id, dia, posicion

compra: prod id, usuario id, fecha, cant, precio total


