import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

// Inline icons
const IconCalendar = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <rect x='3' y='5' width='18' height='16' rx='2'></rect>
    <path d='M16 3v4M8 3v4M3 9h18'></path>
  </svg>
);
const IconClock = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <circle cx='12' cy='12' r='9'></circle>
    <path d='M12 7v5l3 2'></path>
  </svg>
);
const IconMapPin = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <path d='M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z'></path>
    <circle cx='12' cy='10' r='3'></circle>
  </svg>
);

const Home = ({ guestName = '' }) => {
  const { t, i18n } = useTranslation();
  const images = [
    '/landing_photos/IMG_8843.jpg',
    '/landing_photos/IMG_0710.jpg',
    '/landing_photos/IMG_2288.jpg',
    '/landing_photos/IMG_3475.jpg',
    '/landing_photos/IMG_0928.jpg',
    '/landing_photos/IMG_3456.jpg',
    '/landing_photos/IMG_2834.jpg',
    '/landing_photos/IMG_2938.jpg',
    '/landing_photos/IMG_4485.jpg',
    '/landing_photos/IMG_9092.jpg',
    '/landing_photos/IMG_0123.jpg',
  ];

  const story = t('story.timeline', { returnObjects: true });

  const fadeIn = (direction = 'bottom', delay = 0) => {
    const dist = 32;
    let x = 0;
    let y = 0;
    if (direction === 'left') x = -dist;
    if (direction === 'right') x = dist;
    if (direction === 'top') y = -dist;
    if (direction === 'bottom') y = dist;
    return {
      hidden: { opacity: 0, x, y },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay },
      },
    };
  };

  const dirFor = (i) =>
    i % 3 === 0 ? 'left' : i % 3 === 1 ? 'right' : 'bottom';

  // Countdown to 22 Sep 2025 08:00 WIB (UTC+7 => 01:00Z)
  const eventStart = new Date('2025-09-22T01:00:00Z');
  const [remaining, setRemaining] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diffMs = eventStart.getTime() - now.getTime();
      const totalSec = Math.max(0, Math.floor(diffMs / 1000));
      let rem = totalSec;
      const d = Math.floor(rem / 86400);
      rem -= d * 86400;
      const h = Math.floor(rem / 3600);
      rem -= h * 3600;
      const m = Math.floor(rem / 60);
      const s = rem - m * 60;
      setRemaining({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  const googleCalUrl =
    'https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Thomi%20Jasir%20%26%20Shafira%20Yasmin&dates=20250922T010000Z/20250922T030000Z&details=Undangan%20akad nikah%20Thomi%20Jasir%20%26%20Shafira%20Yasmin&location=Al-Ukhuwwah%20Great%20Mosque%2C%20Jalan%20Wastukencana%20No.27%2C%20Bandung';

  return (
    <div className='max-w-sm mx-auto px-5 py-12 space-y-16'>
      {/* Invitation Header */}
      <motion.section
        variants={fadeIn('bottom', 0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='text-center space-y-2'
      >
        <p className='text-sm text-gray-600'>{t('header.inviteeSmall')}</p>
        <p className='text-xl font-semibold font-display'>
          {guestName ? `${t('header.invitee')} ${guestName}` : t('header.invitee')}
        </p>
      </motion.section>

      {/* Opening / Greeting */}
      <motion.section
        variants={fadeIn('bottom', 0.05)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='space-y-3 text-center'
      >
        <h2 className='font-display text-2xl'>{t('greeting.salutation')}</h2>
        <p className='text-sm leading-relaxed text-gray-700'>
          {t('greeting.inviteText')}
        </p>
        <p className='font-script text-3xl text-gray-900'>
          {i18n.language.startsWith('cn')
            ? 'Shafira Yasmin | 林莎雅茵'
            : 'Shafira Yasmin'}
        </p>
        <p className='text-sm text-gray-500'>&</p>
        <p className='font-script text-3xl text-gray-900'>Thomi Jasir</p>
        <p className='text-sm text-gray-600'>{t('greeting.date')}</p>
        <img
          src='/landing_photos/IMG_8233.jpg'
          alt='Pasangan'
          className='w-full object-cover rounded-lg'
        />
      </motion.section>

      {/* Verse card */}
      <motion.section
        variants={fadeIn('bottom', 0.05)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='bg-white rounded-2xl shadow-sm overflow-hidden -mt-4'
      >
        <div className='p-5 text-center'>
          <blockquote className='italic text-gray-700 leading-relaxed'>
            {t('verse.text')}
          </blockquote>
          <div className='mt-2 text-xs tracking-widest text-gray-500'>
            {t('verse.source')}
          </div>
        </div>
      </motion.section>

      {/* Countdown */}
      <motion.section
        variants={fadeIn('bottom', 0.05)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='space-y-3'
      >
        <h2 className='font-display text-center text-2xl'>
          {t('countdown.title')}
        </h2>
        <div className='grid grid-cols-4 gap-2'>
          {[
            { label: t('countdown.days'), value: remaining.d },
            { label: t('countdown.hours'), value: pad(remaining.h) },
            { label: t('countdown.minutes'), value: pad(remaining.m) },
            { label: t('countdown.seconds'), value: pad(remaining.s) },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeIn(i % 2 === 0 ? 'left' : 'right', 0)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.5 }}
              className='bg-white rounded-xl p-3 text-center shadow-sm'
            >
              <div className='text-2xl font-semibold'>{item.value}</div>
              <div className='text-xs text-gray-500'>{item.label}</div>
            </motion.div>
          ))}
        </div>
        <div className='text-center text-xs text-gray-500'>
          {t('countdown.footer')}
        </div>
      </motion.section>

      {/* Bride & Groom */}
      <motion.section
        variants={fadeIn('bottom', 0.05)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='space-y-6'
      >
        <h2 className='font-display text-center text-2xl'>
          {t('couple.title')}
        </h2>
        <div className='space-y-4'>
          {/* Bride */}
          <motion.div
            variants={fadeIn('left', 0.05)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='relative rounded-2xl overflow-hidden shadow-sm'
          >
            <img
              src='/landing_photos/IMG_6788.jpg'
              alt='Shafira Yasmin'
              className='w-full h-96 object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />
            <div className='absolute inset-x-0 bottom-0 p-4 text-white'>
              <div className='font-script text-3xl leading-none'>
                {i18n.language.startsWith('cn')
                  ? 'Shafira Yasmin | 林莎雅茵'
                  : 'Shafira Yasmin'}
              </div>
              <div className='mt-2 text-sm text-white/90'>
                {t('couple.brideParents')}
              </div>
            </div>
            <div className='absolute left-2 top-2 bg-white/85 text-gray-800 text-[11px] px-2 py-1 rounded-full ring-1 ring-black/10'>
              {t('couple.brideTag')}
            </div>
          </motion.div>

          {/* Groom */}
          <motion.div
            variants={fadeIn('right', 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='relative rounded-2xl overflow-hidden shadow-sm text-right'
          >
            <img
              src='/landing_photos/IMG_0987.jpg'
              alt='Thomi Jasir'
              className='w-full h-96 object-cover scale-125'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />
            <div className='absolute inset-x-0 bottom-0 p-4 text-white'>
              <div className='font-script text-3xl leading-none'>
                Thomi Jasir
              </div>
              <div className='mt-2 text-sm text-white/90'>
                {t('couple.groomParents')}
              </div>
            </div>
            <div className='absolute left-2 top-2 bg-white/85 text-gray-800 text-[11px] px-2 py-1 rounded-full ring-1 ring-black/10'>
              {t('couple.groomTag')}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story / Timeline */}
      <motion.section
        variants={fadeIn('bottom', 0.05)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='space-y-4'
      >
        <h2 className='font-display text-center text-2xl'>
          {t('story.title')}
        </h2>
        <div className='space-y-3'>
          {story.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeIn(i % 2 === 0 ? 'left' : 'right', 0)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.3 }}
              className='bg-white rounded-xl p-4 shadow-sm'
            >
              <div className='font-display text-lg'>{s.year}</div>
              <p className='text-sm text-gray-700'>{s.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Event */}
      <motion.section
        variants={fadeIn('bottom', 0.05)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='space-y-4'
      >
        <h2 className='font-display text-center text-2xl'>
          {t('event.title')}
        </h2>
        <div className='bg-white rounded-2xl p-5 shadow-sm space-y-3'>
          <div className='space-y-1'>
            <div className='flex items-center gap-2 text-sm text-gray-700'>
              <IconCalendar className='w-4 h-4' />
              <span>{t('event.date')}</span>
            </div>
            <div className='flex items-center gap-2 text-sm text-gray-700'>
              <IconClock className='w-4 h-4' />
              <span>{t('event.time')}</span>
            </div>
          </div>
          <div className='space-y-1'>
            <div className='flex items-center gap-2 font-medium'>
              <IconMapPin className='w-4 h-4' />
              <span>{t('event.venue')}</span>
            </div>
            <div className='text-sm text-gray-600'>{t('event.address')}</div>
          </div>
          <a
            href='https://maps.app.goo.gl/8rAmXn8E4Nwk2ovN8'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center justify-center gap-2 w-full text-center py-2 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors'
          >
            <IconMapPin className='w-4 h-4' />
            {t('event.maps')}
          </a>
          <a
            href={googleCalUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center justify-center gap-2 w-full text-center py-2 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors'
          >
            <IconCalendar className='w-4 h-4' />
            {t('event.addToCalendar')}
          </a>
        </div>
      </motion.section>

      {/* Gallery - Masonry with CSS columns */}
      <motion.section
        variants={fadeIn('bottom', 0.05)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
        className='space-y-4'
      >
        <h2 className='font-display text-center text-2xl'>
          {t('gallery.title')}
        </h2>
        <div className='columns-2 gap-2 [column-fill:_balance]'>
          {images.map((src, i) => (
            <motion.img
              key={i}
              variants={fadeIn(dirFor(i), i * 0.03)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.15 }}
              src={src}
              alt={t('gallery.itemAlt', { index: i + 1 })}
              className='mb-2 w-full rounded-lg shadow-sm break-inside-avoid'
            />
          ))}
        </div>
      </motion.section>

      {/* Gift */}
      <motion.section
        variants={fadeIn('bottom', 0.05)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='space-y-4'
      >
        <h2 className='font-display text-center text-2xl'>{t('gift.title')}</h2>
        <p className='text-sm text-center text-gray-700'>{t('gift.text')}</p>
        <div className='grid grid-cols-1 gap-3'>
          <motion.div
            variants={fadeIn('left', 0)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='bg-white rounded-xl p-4 shadow-sm'
          >
            <div className='font-medium'>Shafira Yasmin</div>
            <div className='text-sm text-gray-600'>Bank BSI</div>
            <div className='text-sm tracking-wider'>7110 0324 33</div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.05)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='bg-white rounded-xl p-4 shadow-sm'
          >
            <div className='font-medium'>Thomi Jasir</div>
            <div className='text-sm text-gray-600'>Bank BCA</div>
            <div className='text-sm tracking-wider'>8090 2224 91</div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.05)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.3 }}
            className='bg-white rounded-xl p-4 shadow-sm'
          >
            <div className='font-medium'>Thomi Jasir</div>
            <div className='text-sm text-gray-600'>PayNow</div>
            <div className='text-sm tracking-wider'>8158 4771</div>
          </motion.div>
        </div>
      </motion.section>

      {/* Closing */}
      <motion.section
        variants={fadeIn('bottom', 0.05)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}
        className='text-center space-y-3'
      >
        <h2 className='font-display text-2xl'>{t('closing.title')}</h2>
        <p className='text-sm text-gray-700'>{t('closing.text1')}</p>
        <p className='text-sm text-gray-700'>{t('closing.text2')}</p>
      </motion.section>
    </div>
  );
};

export default Home;
