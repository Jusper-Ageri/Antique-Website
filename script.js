
document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();
  const f = e.target;
  const name = encodeURIComponent(f.name.value);
  const email = encodeURIComponent(f.email.value);
  const phone = encodeURIComponent(f.phone.value);
  const msg = encodeURIComponent(f.message.value);
  const subject = encodeURIComponent('Quote request from ' + f.name.value);
  const body = `Name: ${f.name.value}%0D%0AEmail: ${f.email.value}%0D%0APhone: ${f.phone.value}%0D%0A%0D%0AProject details:%0D%0A${f.message.value}`;
  window.location.href = `mailto:info@antiquecreatives.co.ke?subject=${subject}&body=${body}`;
});
