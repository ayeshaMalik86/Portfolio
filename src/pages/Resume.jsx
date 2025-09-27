import React from 'react'

const Resume = () => {
  const handleDownload = () => {
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices, open in new tab
      window.open('/assets/Resume-1.pdf', '_blank');
    } else {
      // For desktop, use the programmatic download
      const link = document.createElement('a');
      link.href = '/assets/Resume-1.pdf'; 
      link.download = 'Resume.pdf';
      link.target = '_blank'; // Fallback for browsers that don't support download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className='font-mona p-6 flex justify-center'>
        <div className='text-center'>
          <h2 className='text-6xl font-bold mb-10'>Resumé</h2>
          <div className='space-y-6'>
            <p className='text-lg text-gray-600 mb-6'>
              Download my latest resume to learn more about my experience and skills.
            </p>
            <button 
              onClick={handleDownload}
              className='inline-flex items-center px-6 py-3 border border-gray-500 text-gray-500 font-semibold rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl'
            >
              <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
              </svg>
              Download Resume (PDF)
            </button>
          </div>
        </div>
    </div>
  )
}

export default Resume;
