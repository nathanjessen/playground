export const IconButton = () => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      <div>
        <button className='my-btn my-btn-primary p-8'>
          <svg
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12.5 1L0.5 9.34783V10.3913C0.5 10.9652 0.969565 11.4348 1.54348 11.4348H3.63043V23.9565C3.63043 24.5304 4.1 25 4.67391 25H20.3261C20.9 25 21.3696 24.5304 21.3696 23.9565V11.4348H23.4565C24.0304 11.4348 24.5 10.9652 24.5 10.3913V9.34783L12.5 1Z'
              fill='currentColor'
              stroke='currentColor'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15.109 25.0002H9.8916V16.1307C9.8916 14.6907 11.0603 13.522 12.5003 13.522C13.9403 13.522 15.109 14.6907 15.109 16.1307V25.0002Z'
              fill='currentColor'
              stroke='#6024A2'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <h2>Issue</h2>
      </div>
      <div>
        <button className='my-btn my-btn-primary p-8'>
          <svg
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              transform='translate(4, 2)'
              d='M12.5 1L0.5 9.34783V10.3913C0.5 10.9652 0.969565 11.4348 1.54348 11.4348H3.63043V23.9565C3.63043 24.5304 4.1 25 4.67391 25H20.3261C20.9 25 21.3696 24.5304 21.3696 23.9565V11.4348H23.4565C24.0304 11.4348 24.5 10.9652 24.5 10.3913V9.34783L12.5 1Z'
              fill='currentColor'
              stroke='currentColor'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              transform='translate(4, 2)'
              d='M15.109 25.0002H9.8916V16.1307C9.8916 14.6907 11.0603 13.522 12.5003 13.522C13.9403 13.522 15.109 14.6907 15.109 16.1307V25.0002Z'
              fill='currentColor'
              stroke='#6024A2'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <h2>Transform fix</h2>
      </div>
      <div>
        <button className='my-btn my-btn-primary p-10'>
          <svg
            viewBox='0 0 25 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12.5 1L0.5 9.34783V10.3913C0.5 10.9652 0.969565 11.4348 1.54348 11.4348H3.63043V23.9565C3.63043 24.5304 4.1 25 4.67391 25H20.3261C20.9 25 21.3696 24.5304 21.3696 23.9565V11.4348H23.4565C24.0304 11.4348 24.5 10.9652 24.5 10.3913V9.34783L12.5 1Z'
              fill='currentColor'
              stroke='currentColor'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15.109 25.0002H9.8916V16.1307C9.8916 14.6907 11.0603 13.522 12.5003 13.522C13.9403 13.522 15.109 14.6907 15.109 16.1307V25.0002Z'
              fill='currentColor'
              stroke='#6024A2'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <h2>Viewbox fix</h2>
      </div>
    </div>
  );
};
