# 🐍 Snake Arena

Snake Arena es un juego **Snake multijugador en tiempo real**, desarrollado con:

- **Frontend:** Angular + Canvas
- **Backend:** Spring Boot + WebSockets (STOMP)

El objetivo del proyecto es **entrenar arquitectura de sistemas en tiempo real**, clean code y buenas prácticas full-stack.

---

## 🚀 Roadmap

### Fase 1 — Juego local (Angular)
- [ ] Motor de juego desacoplado
- [ ] Renderizado con Canvas
- [ ] Movimiento + colisiones
- [ ] Comida + puntuación
- [ ] Reinicio de partida

### Fase 2 — Preparación multijugador
- [ ] Soporte local para múltiples serpientes
- [ ] Arquitectura server-authoritative

### Fase 3 — Multijugador online
- [ ] Backend con Spring Boot + WebSockets
- [ ] Lobby + salas
- [ ] Sincronización de estado en tiempo real
- [ ] Sistema de reconexión

---

## 📁 Estructura del proyecto
snake-arena/
├── client/    # Angular frontend
├── server/    # Spring Boot backend (coming soon)
└── docs/      # documentation and diagrams

---

## 🛠️ Local Development

### Frontend

```bash
cd client
npm install
npm start
````
Open: http://localhost:4200