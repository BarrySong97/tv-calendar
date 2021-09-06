import './index.less';
import React, { FC, useState } from 'react';
import 'antd/dist/antd.less';
import WeekCard from '@/components/week-card';

export default function IndexPage() {
  return (
    <div className=" pl-4 pr-4 pb-4">
      {new Array(7).fill(0).map((v, i) => (
        <div className="mt-4 mb-4">
          <WeekCard week={i} />
        </div>
      ))}
    </div>
  );
}
