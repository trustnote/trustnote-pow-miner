const _pow			= require( 'trustnote-pow-common/pow.js' );
const _event_bus		= require( 'trustnote-pow-common/event_bus.js' );
const _trustnote_pow_miner	= require( 'trustnote-pow-miner' );


//
// *	@param	{number}	oInput.currentRoundIndex
// *	@param	{string}	oInput.currentFirstTrustMEBall
// *	@param	{string}	oInput.currentDifficulty
// *	@param	{string}	oInput.currentPubSeed
// *	@param	{string}	oInput.superNodeAuthor
//
let nDifficulty		= _trustnote_pow_miner.difficulty256HexToUInt32( "00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" );
let oMiningInput	= 	{
	roundIndex		: 111,
	firstTrustMEBall	: 'rjywtuZ8A70vgIsZ7L4lBR3gz62Nl3vZr2t7I4lzsMU=',
	difficulty		: nDifficulty,
	publicSeed		: 'public key',
	superNodeAuthor		: 'xing.supernode.trustnote.org',
};


_event_bus.on
(
	'pow_mined_gift',
	( objSolution ) =>
	{
		console.log( `############################################################` );
		console.log( objSolution );

		if ( 'object' === typeof objSolution )
		{
			console.log( `will check proof of work` );
			_pow.checkProofOfWork( oMiningInput, objSolution.hash, objSolution.nonce, function( err, objResult )
			{
				console.log( `_pow.checkProofOfWork, err : ${ err }, objResult : `, objResult );
				if ( null === err &&
					'object' === typeof objResult &&
					'number' === typeof objResult.code && 0 === objResult.code )
				{
					console.log( `PoW is correct.` );
				}
				else
				{
					console.error( `PoW is invalid : `, err );
				}
			});
		}
		else
		{
			console.error( `invalid objSolution` );
		}
	}
);
_pow.startMiningWithInputs
(
	oMiningInput,
	function( err )
	{
		if ( err )
		{
			console.log( `failed to start calculation, `, err );
			return;
		}

		console.log( `start calculation successfully.` );
	}
);
