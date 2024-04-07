import React from 'react'
import Rrow from '../Row/Rrow'
import Requests from '../../../utillis/requests'

function RowList() {
  return (
    <>
       <Rrow 
           title="NETFLIX ORIGINALS"
           fetchUrl='/discover/tv?api_key=d4bb4ba9b2a811952a2c9c6028b063dc&with_networks=213'
           isLargeRow={true}
           />
       <Rrow title="Trending Now"fetchUrl={Requests.fetchTrending}/>
       <Rrow title="Top Rated"fetchUrl={Requests.fetchTopRatedMovies}/>
       <Rrow title="Action Movies"fetchUrl={Requests.fetchActionMovies}/>
       <Rrow title="Comedy Movies"fetchUrl={Requests.fetchComedyMovies}/>
       <Rrow title="Horror Movies"fetchUrl={Requests.fetchHorrorMovies}/>
       <Rrow title="Romance Movies"fetchUrl={Requests.fetchRomanceMovies}/>
       <Rrow title="TV Shows"fetchUrl={Requests.fetchTvShow}/>
       <Rrow title="Documentaries"fetchUrl={Requests.fetchDocumentaries}/>
       {/* <Rrow />
       <Rrow />
       <Rrow />
       <Rrow /> */}

      
    </>
  )
}

export default RowList
