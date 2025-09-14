import { useCallback } from 'react';
import i18n from './i18n';
import { useLocation, useNavigate } from 'react-router';

const langs = [
  { code: 'id', label: 'ID' },
  { code: 'en', label: 'EN' },
  { code: 'cn', label: 'CN' },
  { code: 'ta', label: 'TA' },
];

function buildPathFor(lng, pathname, search, hash) {
  const segs = pathname.split('/').filter(Boolean);
  const first = segs[0];
  const hasPrefix = first === 'en' || first === 'cn' || first === 'ta';

  let target = '/';
  if (lng === 'id') {
    target = '/';
  } else {
    target = `/${lng}`;
  }
  if (hasPrefix && segs.length > 1) {
    target += `/${segs.slice(1).join('/')}`;
  } else if (!hasPrefix && pathname !== '/') {
    target += pathname;
  }
  return target + (search || '') + (hash || '');
}

export default function LanguageSwitcher() {
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();
  const onSwitch = useCallback(
    (lng) => {
      try {
        i18n.changeLanguage(lng);
      } catch {}
      const newPath = buildPathFor(lng, pathname, search, hash);
      navigate(newPath, { replace: true });
    },
    [navigate, pathname, search, hash]
  );

  const current = (i18n.language || 'id').slice(0, 2);

  return (
    <div className='fixed top-3 right-3 md:top-4 md:right-4 z-[100]'>
      <div className='flex items-center gap-1 rounded-full border border-black/10 bg-white/90 backdrop-blur px-2 py-1 shadow'>
        {langs.map((l) => (
          <button
            key={l.code}
            onClick={() => onSwitch(l.code)}
            className={`px-2 py-1 text-xs rounded-full transition-colors ${
              current === l.code
                ? 'bg-gray-900 text-white shadow'
                : 'text-gray-800 hover:bg-black/5'
            }`}
            aria-pressed={current === l.code}
            aria-label={`Switch language to ${l.label}`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
