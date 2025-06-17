// // Эффект для позиционирования модального окна
//   useEffect(() => {
//   if (isOpen && messageRef.current && modalRef.current) {
//     const messageRect = messageRef.current.getBoundingClientRect();
//     const modalRect = modalRef.current.getBoundingClientRect();
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;
    
//     // Рассчитываем позицию с проверкой границ
//     let left = messageRect.right - modalRect.width;
//     let top = messageRect.bottom;

//     // Проверка правой границы
//     if (left + modalRect.width > viewportWidth) {
//       left = viewportWidth - modalRect.width - 10;
//     }

//     // Проверка нижней границы
//     if (top + modalRect.height > viewportHeight) {
//       top = messageRect.top - modalRect.height;
//     }

//     // Проверка левой границы
//     if (left < 0) {
//       left = 10;
//     }

//     // Проверка верхней границы
//     if (top < 0) {
//       top = 10;
//     }

//     setPosition({
//       top: top + window.scrollY,
//       left: left + window.scrollX
//     });
//   }
// }, [isOpen, messageRef]);