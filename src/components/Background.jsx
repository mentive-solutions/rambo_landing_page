export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #041D33 0%, #011B72 40%, #0B3562 70%, #002E53 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease infinite',
        }}
      />
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, #7BCFF3, transparent 70%)',
          opacity: 0.15,
          animation: 'glowPulse 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, #0153A7, transparent 70%)',
          opacity: 0.1,
          animation: 'glowPulse 10s ease-in-out infinite reverse',
        }}
      />
    </div>
  )
}
