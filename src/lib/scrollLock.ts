let lockCount = 0;

export function lockBodyScroll() {
  lockCount += 1;
  if (lockCount === 1) {
    document.body.classList.add("scroll-locked");
  }
}

export function unlockBodyScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.classList.remove("scroll-locked");
  }
}
