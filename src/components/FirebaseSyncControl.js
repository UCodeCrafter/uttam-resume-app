import React from 'react';
import { useResumeData } from '../context/ResumeContext';

const FirebaseSyncControl = () => {
  const { dataSource, isFirebaseConfigured, loading, error } = useResumeData();

  if (!isFirebaseConfigured) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        borderRadius: '30px',
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        color: '#ffffff',
        fontSize: '13px',
        fontWeight: '500',
        fontFamily: 'sans-serif',
      }}
    >
      <span
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: loading
            ? '#f59e0b'
            : dataSource === 'firebase'
              ? '#10b981'
              : '#ef4444',
          boxShadow: loading
            ? '0 0 8px #f59e0b'
            : dataSource === 'firebase'
              ? '0 0 8px #10b981'
              : '0 0 8px #ef4444',
        }}
      />
      <span>
        {loading
          ? 'Connecting to Firebase...'
          : dataSource === 'firebase'
            ? 'Firebase Live Data'
            : error
              ? `Firebase Error: ${error}`
              : 'Firebase Empty / Disconnected'}
      </span>
    </div>
  );
};

export default FirebaseSyncControl;


