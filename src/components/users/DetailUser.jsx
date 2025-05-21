import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const DetailUser = () => {
  const { id } = useParams();
  const [detailUser, SetDetailUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://reqres.in/api/users/${id}`, {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      })
      .then((response) => {
        const userDetail = response.data.data;
        SetDetailUser(userDetail);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user detail:', error);
        setIsLoading(false);
      });
  }, [id]);
  return (
    <section className="py-10 ">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="size-30 bg-gray-400 animate-pulse rounded-md"></div>
          <div className="h-5 w-40 bg-gray-400 animate-pulse rounded-md"></div>
          <div className="h-5 w-56 bg-gray-400 animate-pulse rounded-md"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3">
          <div>
            <img src={detailUser.avatar} alt={detailUser.first_name} className="rounded-md" />
          </div>
          <h1 className="font-bold">
            {detailUser.first_name} {detailUser.last_name}
          </h1>
          <p>{detailUser.email}</p>
          <button className="bg-amber-500 font-semibold px-3 py-1 rounded-md cursor-pointer" onClick={() => navigate('/')}>
            Back
          </button>
        </div>
      )}
    </section>
  );
};

export default DetailUser;
