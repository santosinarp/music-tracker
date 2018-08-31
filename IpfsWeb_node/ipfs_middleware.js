var ipfs_middleware = function(){
    var api = this;
    var ipfsAPI = require('ipfs-api');
    var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'}) // leaving out the arguments will default to these values

    // swarm peers
    api.listPeers = (callback) => {
        let final_return = {};
        ipfs.swarm.peers((err,peerInfos) => {                
            if(err){
                callback({
                    'error': 1,
                    'error_message': err.message,
                });
                return
            } 

            let final_return = {
                'error': 0,
                'returns': peerInfos,
            };

            callback(final_return);        
        });      
    }

    
}

module.exports = ipfs_middleware;