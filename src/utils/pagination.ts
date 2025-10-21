export const getVisiblePages = (current: number, total: number): (number | string)[] => {
  const maxVisible = 5;
  const pages: (number | string)[] = [];

  if (total <= maxVisible) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    const left = Math.max(2, current - 1);
    const right = Math.min(total - 1, current + 1);

    pages.push(1);
    if (left > 2) pages.push("...");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < total - 1) pages.push("...");
    pages.push(total);
  }

  return pages;
};
