(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const msg = $('#msg');
  $('#year').textContent = new Date().getFullYear();
  const form = $('#waForm');
  const input = $('#number');

  function normalizeNumber(raw){
    // keep digits only
    const digits = String(raw).replace(/\D+/g, '');
    // optional: if it starts with 05 (KSA local), convert to 9665...
    if (digits.startsWith('05')) return '966' + digits.slice(1);
    if (digits.startsWith('5')) return '966' + digits; // short local
    return digits;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const raw = input.value.trim();
    if (!raw){ input.focus(); return; }
    const normalized = normalizeNumber(raw);
    if (!/^\d{8,15}$/.test(normalized)) {
      msg.textContent = 'رقم غير صالح. تأكد أنه بين 8 و15 رقم بعد التنظيف.';
      return;
    }
    msg.textContent = `سيتم الفتح: https://wa.me/${normalized}`;
    // mimic PHP header redirect
    location.href = `https://wa.me/${normalized}`;
  });
})();
